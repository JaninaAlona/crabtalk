import { useReducer, createContext } from "react";

const MeetingContext = createContext();

function meetingReducer(state, action) {
    switch (action.type) {
        case 'set_meeting_id':
            return { ...state, meeting_id: action.payload };
        case 'set_meeting_link':
            return { ...state, meeting_link: action.payload };
        case 'set_meeting_password':
            return { ...state, meeting_password: action.payload };
        case 'set_text_chat:':
            return { ...state, text_chat: action.payload };
        case 'set_audio_chat:':
            return { ...state, audio_chat: action.payload };
        case 'set_video_chat:':
            return { ...state, video_chat: action.payload };
        case 'set_max_talkers:':
            return { ...state, max_talkers: action.payload };
        case 'set_chat_in_progress:':
            return { ...state, chat_in_progress: action.payload };
        case 'set_chat_started:':
            return { ...state, chat_started: action.payload };
        case 'set_chat_created:':
            return { ...state, chat_created: action.payload };
    }
}

function MeetingProvider({ children }) {
    const defaultMeeting = {
        meeting_id: "",
        meeting_link: "",
        meeting_password: "",
        text_chat: true,
        audio_chat: false,
        video_chat: false,
        max_talkers: 100,
        chat_in_progress: false,
        chat_started: '',
        chat_created: '',
    };
    const [state, dispatch] = useReducer(meetingReducer, defaultMeeting);
    
    return (
        <>
            <MeetingContext.Provider value={{ state, dispatch }}>
                {children}
            </MeetingContext.Provider>
        </>
    )
}

export { MeetingProvider, MeetingContext };