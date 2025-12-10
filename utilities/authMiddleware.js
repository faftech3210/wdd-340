// utilities/authMiddleware.js
const jwt = require("jsonwebtoken")

/**
 * Middleware: attachAccountToLocals
 * - Reads the JWT from the cookie named 'jwt' (if present)
 * - Verifies token and sets res.locals.account to the decoded payload
 * - If token missing/invalid -> res.locals.account stays undefined
 *
 * NOTE: This does NOT block access, only makes account info available to views.
 */
function attachAccountToLocals(req, res, next) {
  const token = req.cookies?.jwt // cookie-parser required
  if (!token) {
    // no token: move on; view logic will treat user as logged out
    return next()
  }

  try {
    // verify token and attach payload to locals for templates and downstream middleware
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // payload should contain account_id, account_firstname, account_type, etc.
    res.locals.account = payload
  } catch (err) {
    // invalid token: do not set locals.account
    res.locals.account = undefined
  }
  return next()
}

/**
 * Middleware: checkAuthRole
 * - Returns a middleware that ensures the account is logged in and account_type
 *   is one of the allowedRoles (e.g. ['Employee', 'Admin']).
 * - If check fails, deliver the login view with a flash message (do not redirect).
 * - This should be applied only to admin/inventory routes (not public classification/detail views).
 */
function checkAuthRole(allowedRoles = []) {
  return (req, res, next) => {
    const token = req.cookies?.jwt
    if (!token) {
      req.flash("warning", "You must be logged in to access that page.")
      // render login page (deliver login view) instead of redirect
      return res.status(401).render("account/login", { title: "Login", errors: null })
    }
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      // if user type allowed -> continue
      if (allowedRoles.includes(payload.account_type)) {
        // attach to locals for controller/view convenience
        res.locals.account = payload
        return next()
      } else {
        // logged in but not allowed
        req.flash("warning", "You do not have permission to access that page.")
        return res.status(403).render("account/login", { title: "Login", errors: null })
      }
    } catch (err) {
      // token invalid
      req.flash("warning", "Session invalid. Please log in.")
      return res.status(401).render("account/login", { title: "Login", errors: null })
    }
  }
}

module.exports = {
  attachAccountToLocals,
  checkAuthRole
}
