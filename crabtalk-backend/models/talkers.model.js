export default (sequelize, Sequelize) => {
    const Talkers = sequelize.define("talkers", {
        talker_id: {
            type: DataTypes.UUID.V4,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            
        },
        talker_name: {
            type: Sequelize.STRING,
        },
    });
    return Talkers;
};