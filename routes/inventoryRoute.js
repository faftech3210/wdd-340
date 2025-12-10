// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);


router.get("/detail/:inv_id",
utilities.handleErrors(invController.buildDetail))


/* ==================
 Error Route
 week3, Task 3
 ================== */
router.get(
  "/broken",
  utilities.handleErrors(invController.throwError)
)



module.exports = router;