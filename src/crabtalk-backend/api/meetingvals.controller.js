import Meetingvals from "./meetingvals";

export default class MeetingvalsController {
    static async apiPostMeetingvals(req, res, next) {
        try {
            const meetingType = req.body.meetingType
            const participants = req.body.participants
            const password = req.body.participants

            const meetingvalsResp = await Meetingvals.addMeetingvals(
                meetingType,
                participants,
                password
            )
            res.json({ status: "success" })
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiGetMeetingvals(req, res, next) {
        try {
            let id = req.params.id || {}
            let meetingvals = await Meetingvals.getMeetingvals(id)
            if (!meetingvals) {
                res.status(400).json({ error: "Not found" })
                return
            }
            res.json(meetingvals)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiDeleteMeetingvals(req, res, next) {
        try {
            const meetingvalsId = req.params.id
            const meetingvalsResp = await Meetingvals.deleteMeetingvals(meetingvalsId)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}