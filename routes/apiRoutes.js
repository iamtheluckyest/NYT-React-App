const router = require("express").Router();
const controller = require( "../controller/controller")


router.route("/article/:id")
  .get(controller.getOne)
  .delete(controller.remove);  

router.route("/saved")
  .get(controller.findAll)
  .post(controller.keep)

module.exports = router;
  