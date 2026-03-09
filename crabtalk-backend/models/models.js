import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import Meetings from "./meetings.model.js";
import Talkers from "./talkers.model.js";
import TalkersInMeetings from "./talkersinmeetings.model.js";
 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.meetings = Meetings(sequelize, Sequelize);
db.talkers = Talkers(sequelize, Sequelize);
db.talkers_in_meetings = TalkersInMeetings(sequelize, Sequelize);
 
export default db;