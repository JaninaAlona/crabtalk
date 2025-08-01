import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId
let meetingvals

export default class Meetingvals {
    static async injectDB(conn) {
        if (meetingvals) {
            return
        }
        try {
            reviews = await conn.db("meetingvals").collection("meetingvals")
        } catch (e) {
            console.error(`Unable to establish connection handles in userMeetingvals: ${e}`)
        }
    }

    static async addMeetingvals(meetingType, participants, password) {
        try {
            const meetingvalsDoc = {
                meetingType: meetingType,
                participants: participants,
                password: password
            }
            return await meetingvals.insertOne(meetingvalsDoc)
        } catch (e) {
            console.error(`Unable to post meetingvals: ${e}`)
            return { error: e }
        }
    }

    static async getMeetingvals(meetingvalsId) {
        try {
            return await meetingvals.findOne({ _id: ObjectId(meetingvalsId)})
        } catch (e) {
            console.error(`Unable to get meetingvals: ${e}`)
            return {error: e}
        }
    }

    static async deleteMeetingvals(meeetingvalsId) {
        try {
            const deleteResp = await meetingvals.deleteOne({
                _id: ObjectId(meeetingvalsId)
            })
            return deleteResp
        } catch (e) {
            console.error(`Unable to delete meetingvals: ${e}`)
            return { error: e }
        }
    }
}