const express = require("express");

const router = express.Router();
const {
  getItemsController,
  postItemController,
  updateItemController,
  deleteItemController,
} = require("../controllers/itemsController");

const timelog = require("../middlewares/timelogMiddleware");

router.use(timelog);

router.route("/").get(getItemsController).post(postItemController);

router.route("/:id").put(updateItemController).delete(deleteItemController);

module.exports = router;
