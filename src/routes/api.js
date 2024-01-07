const SalesController= require("../controllers/SalesController");

const router = require("express").Router();


router.post("/create",SalesController.create)
router.get("/total-revenue", SalesController.totalRevenue);



module.exports = router;
