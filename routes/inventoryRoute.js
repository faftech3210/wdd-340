// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
<<<<<<< HEAD
=======
const invChecks = require("../utilities/inventory-validation")
>>>>>>> 69c97e2d58c1402c4854698e5a190b0f1f77c647

router.get("/type/:classificationId", invController.buildByClassificationId);


<<<<<<< HEAD
router.get("/detail/:inv_id",
utilities.handleErrors(invController.buildDetail))


/* ==================
 Error Route
 week3, Task 3
 ================== */
=======
/* ****************************************
 * Route to build vehicle detail view
 **************************************** */
router.get("/detail/:id", 
utilities.handleErrors(invController.buildDetail))

/* ****************************************
 * Error Route
 * Assignment 3, Task 3
 **************************************** */
>>>>>>> 69c97e2d58c1402c4854698e5a190b0f1f77c647
router.get(
  "/broken",
  utilities.handleErrors(invController.throwError)
)

<<<<<<< HEAD
=======
/* ****************************************
 * Build Management View Route
 * Assignment 4, Task 1
 * checkAccountType added Unit 5, Assignment 5, Task 2
 **************************************** */
router.get(
  "/",
  //utilities.checkAccountType,
  utilities.handleErrors(invController.buildManagementView)
)

/* ****************************************
 * Build add-classification View Route
 * Assignment 4, Task 2
 * checkAccountType added Unit 5, Assignment 5, Task 2
 **************************************** */
router.get(
  "/newClassification",
  //utilities.checkAccountType,
  utilities.handleErrors(invController.newClassificationView)
)


/* ****************************************
 * Process add-classification Route
 * Assignment 4, Task 2
 * checkAccountType added Unit 5, Assignment 5, Task 2
 **************************************** */
router.post(
  "/addClassification",
  //utilities.checkAccountType,
  invChecks.classificationRule(),
  invChecks.checkClassificationData,
  utilities.handleErrors(invController.addClassification)
)

/* ****************************************
 * Build add-vehicle View Route
 * Assignment 4, Task 3
 * checkAccountType added Unit 5, Assignment 5, Task 2
 **************************************** */
router.get(
  "/newVehicle",
  //utilities.checkAccountType,
  utilities.handleErrors(invController.newInventoryView)
)

/* ****************************************
 * Process add-vehicle Route
 * Assignment 4, Task 3
 * checkAccountType added Unit 5, Assignment 5, Task 2
 **************************************** */
router.post(
  "/addInventory",
  //utilities.checkAccountType,
  invChecks.newInventoryRules(),
  invChecks.checkInventoryData,
  utilities.handleErrors(invController.addInventory)
)

>>>>>>> 69c97e2d58c1402c4854698e5a190b0f1f77c647


module.exports = router;