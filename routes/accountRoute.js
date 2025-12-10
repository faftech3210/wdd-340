// Imported required extenal Resources
const express = require("express");
const router = new express.Router();
const utilities = require("../utilities");
const regValidate = require('../utilities/account-validation')
const accountController = require("../controllers/accountController");

// Account Management Dashboard (default for /account)
router.get(
  "/",
  utilities.checkLogin, utilities.handleErrors(accountController.buildAccountManagement)
)


// Route for "My Account" page
// This file handles routes AFTER "/account"
router.get(
  "/login", 
   utilities.handleErrors(accountController.buildLogin)
);

router.get(
  "/register", utilities.handleErrors(accountController.buildRegister)
);

//Route for data transport
router.post(
  "/register",
  regValidate.registationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount))

  // Process the login attempt
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.accountLogin)
)
// Export Router
module.exports = router;
