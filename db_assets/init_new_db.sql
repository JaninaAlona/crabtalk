CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE meetings (
    meeting_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    meeting_password VARCHAR(50),
    text_chat BOOLEAN NOT NULL DEFAULT TRUE,
    audio_chat BOOLEAN NOT NULL DEFAULT FALSE,
    video_chat BOOLEAN NOT NULL DEFAULT FALSE,
    max_talkers INT NOT NULL DEFAULT 100, 
    chat_in_progress BOOLEAN NOT NULL DEFAULT FALSE,
    chat_started TIMESTAMP,
    chat_created TIMESTAMP NOT NULL default current_timestamp
);
CREATE TABLE talkers (
    talker_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    talker_name VARCHAR(20) NOT NULL
);
CREATE TABLE talkers_in_meetings(
    meeting_id uuid DEFAULT uuid_generate_v4 (),
    talker_id uuid DEFAULT uuid_generate_v4 (),
    PRIMARY KEY (meeting_id, talker_id),
    FOREIGN KEY (meeting_id) REFERENCES meetings(meeting_id),
    FOREIGN KEY (talker_id) REFERENCES talkers(talker_id)
);