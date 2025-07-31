import express from "express"

const route = express.Router()

route.route("/api/meetingvals").get(function(req, res, next) {
    res.send({'message': 'Hello from the backend!'}) 
    next()
});

export default route