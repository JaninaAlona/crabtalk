import express from "express";
import MeetingValsCtrl from "./meetingvals.controller.js"

const route = express.Router()

route.route("/api/meetingvals").post(MeetingValsCtrl.apiPostMeetingvals)

export default route