export default (sequelize, Sequelize) => {
    const TalkersInMeetings = sequelize.define("talkers_in_meetings", {
        meeting_id: {
            type: DataTypes.UUID.V4,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        talker_id: {
            type: DataTypes.UUID.V4,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
    });
    // foreign keys
    TalkersInMeetings.belongsTo(Meetings);
    TalkersInMeetings.belongsTo(Talkers);
    return TalkersInMeetings;
};