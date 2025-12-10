const utilities = require("../utilities")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  // req.flash("notice", "This is a flash message.")
  res.render("index", {title: "Home", nav})
}

<<<<<<< HEAD
/* ==================================
 * Task 3 Trigger a 500 Server Error
  ==================================*/
baseController.triggerError = async function (req, res, next) {
  throw new Error("500 Server Error")  
}

module.exports = baseController
=======
/* *********************************
 * Task 3 Trigger a 500 Server Error
 * ****************************** */
// baseController.triggerError = async function (req, res, next) {
//   throw new Error("500 Server Error")  
// }


module.exports = baseController
>>>>>>> 69c97e2d58c1402c4854698e5a190b0f1f77c647
