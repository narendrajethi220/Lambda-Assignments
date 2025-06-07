import express from "express";
import { getUser } from "../../controllers/user.controller";

const v1Router = express.Router();

v1Router.get("/user", getUser);

export default v1Router;
