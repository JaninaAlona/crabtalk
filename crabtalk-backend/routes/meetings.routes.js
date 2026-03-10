import * as meetings from "../controllers/meetings.controller";
import express from "express";
 
export default (app) => {
    let router = express.Router();
 
    // Create a new Meeting
    router.post("/", meetings.create);

    app.use("/api", router);
};