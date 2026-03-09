import db from "../models/models.js"

const Op = db.Sequelize.Op;
const Meetings = db.meetings;

export const create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
 
    // Create a Meeting
    const meeting = {
        meeting_id: req.body.meeting_id,
        meeting_password: req.body.meeting_password,
        text_chat: req.body.text_chat,
        audio_chat: req.body.audio_chat,
        video_chat: req.body.video_chat,
        max_talkers: req.body.max_talkers,
        chat_in_progress: req.body.chat_in_progress,
        chat_started: req.body.chat_in_progress,
        chat_created: req.body.chat_created,
    };
 
    // Save Meeting in the database
    Meetings.create(meeting)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Meeting.",
            });
        });
};