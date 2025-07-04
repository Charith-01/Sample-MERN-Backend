import express from 'express';
import { deleteItems, getAllGoodItem, getAllItems, saveItems, searchItem, updateItems } from '../controllers/itemController.js';

const itemRouter = express.Router();

itemRouter.get("/",getAllItems);

itemRouter.post("/",saveItems);

itemRouter.put("/",updateItems);

itemRouter.delete("/",deleteItems);

itemRouter.get("/good",getAllGoodItem);

itemRouter.get("/:name", searchItem);

export default itemRouter;