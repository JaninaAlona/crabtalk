import { getSHA256Hash } from "boring-webcrypto-sha256";
import Password from './Password.jsx';
import MeetingType from './MeetingType.jsx';
import Participants from './Participants.jsx';

function CreateMeeting({transferLink, submitTrigger}) {

    async function getSHA256Hash(input) {
        const textAsBuffer = new TextEncoder().encode(input);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        return hash;
    }
    
    function randomChar(length, chars) {
        let result           = '';
        const characters       = chars;
        const charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async function calculateMeetingLink() {
        let meetingLink = '';
        const performanceTime = performance.now()
        const systemTime = new Date().getTime()

        const smallestRand = Math.random()
        const oneDigitRand = Math.random() * 10
        const twoDigitRand = Math.random() * 100 
        const threeDigitRand = Math.random() * 1000
        const randomCharNoCaseDigitsA = randomChar(4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
        const upperCaseA = randomChar(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        const lowerCaseA = randomChar(2, 'abcdefghijklmnopqrstuvwxyz')
        const randomCharNoCaseDigitsB = randomChar(16, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
        const upperCaseB = randomChar(8, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        const lowerCaseB = randomChar(10, 'abcdefghijklmnopqrstuvwxyz')
        const calcString = lowerCaseA + performanceTime + lowerCaseB + upperCaseA + systemTime + smallestRand + oneDigitRand + twoDigitRand + randomCharNoCaseDigitsB + upperCaseB + threeDigitRand + randomCharNoCaseDigitsA 

        let subA = calcString.substring(0, 21)
        let subB = calcString.substring(30, 44)
        let subC = calcString.substring(50, 80)
        let subD = calcString.substring(98, calcString.length)
        const input = subA + subB + subC + subD
        console.log(input)
        meetingLink = await getSHA256Hash(input)
        return meetingLink
    }   

    async function createSubmit(e) {
        e.preventDefault()
        const meetingLink = await calculateMeetingLink()
        console.log(meetingLink)
        transferLink(meetingLink)
    }

    return (
            <form onSubmit={createSubmit}>
                <fieldset>
                    <legend>Create meeting</legend>
                    <div className="create-meet">
                        <div className="welcome-gui-con">
                            <input className="meeting-btn" type="submit" value="Create" />
                        </div>
                        <MeetingType />
                        <Participants id="people" htmlFor="people" name="participants" label="Max. participants:" />
                        <Password pwID="setPW" pwLabel="Use password:" pwName="createMeetingPW" id="showPW" name="hidePW" htmlFor="showPW" label="Show Password" value="createPW" />
                    </div>
                </fieldset>
            </form>
        )
    }

export default CreateMeeting