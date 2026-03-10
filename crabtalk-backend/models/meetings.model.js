export default (sequelize, Sequelize) => {
    const Meetings = sequelize.define("meetings", {
        meeting_id: {
            type: DataTypes.UUID.V4,
            primaryKey: true,
        },
        meeting_link: {
            type: Sequelize.STRING,
        },
        meeting_password: {
            type: Sequelize.STRING,
        },
        text_chat: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        audio_chat: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        video_chat: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        max_talkers: {
            type: Sequelize.INTEGER,
            defaultValue: 100,
        },
        chat_in_progress: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        chat_started: {
            type: Sequelize.DATE,
        },
        chat_created: {
            type: Sequelize.DATE,
        },
    });
    return Meetings;
};