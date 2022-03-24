import { Router } from "express";
import AddressController from "./controllers/AddressController";

const routes = Router();
const addressController = new AddressController();

routes.get("/distance", addressController.GetDistance);

export default routes;
