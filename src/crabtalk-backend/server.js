import express from "express"
import cors from "cors"
import meetingvals from "./api/meetingvals.route.js"

const beApp = express()

beApp.use(cors())
beApp.use(express.json())

beApp.use("api/meetingvals", meetingvals)
beApp.use('/{*any}', (req, res) => res.status(404).send("Not found"))

export default beApp