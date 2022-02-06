import React, { useEffect } from "react";
import { View } from "react-native";

import JitsiMeet, { JitsiMeetView } from "../../module/JitsiMeetModule";

const JITSI_SERVER_URL = 'https://meet.jit.si/turkcell_jitsi_1';

const VideoCall = (props) => {

    useEffect(() => {
        const url = JITSI_SERVER_URL;
        const userInfo = {
            displayName: 'User',
            email: 'user@example.com',
            avatar: 'https:/gravatar.com/avatar/abc123',
        };
        JitsiMeet.call(url, userInfo);
    }, [])

    const onConferenceTerminated = (nativeEvent) => {
        console.log(nativeEvent)
    }
    const onChatMessageReceived = (nativeEvent) => {
        console.log(nativeEvent)
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <JitsiMeetView
                onConferenceTerminated={onConferenceTerminated}
                onChatMessageReceived={onChatMessageReceived}
                style={{ flex: 0, height: "100%", width: "100%" }} />
        </View >
    );
};


export default VideoCall;