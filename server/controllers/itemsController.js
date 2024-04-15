//Mongoose Item model
const Item = require("../models/itemSchema");

const getItemsController = async (req, res) => {
  const items = await Item.find({});

  res.status(200).json(items);
};

const postItemController = async (req, res) => {
  const { title, subtitle } = req.body;

  const item = await Item.create({
    title,
    subtitle,
  });

  res.status(201).json(item);
};

const updateItemController = async (req, res) => {
  const id = req.params.id;

  const { title, subtitle } = req.body;

  const updatedItem = await Item.findOneAndUpdate(
    { _id: id },
    { title, subtitle },
    { new: true }
  );

  res.status(200).json(updatedItem);
};

const deleteItemController = async (req, res) => {
  const id = req.params.id;

  const deletedItem = await Item.deleteOne({ _id: id });

  res.status(200).json(deletedItem);
};

module.exports = {
  getItemsController,
  postItemController,
  updateItemController,
  deleteItemController,
};
