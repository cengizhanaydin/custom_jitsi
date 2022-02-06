import { NativeModules, requireNativeComponent } from "react-native";

export const JitsiMeetView = requireNativeComponent("RNJitsiMeetView");
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule && JitsiMeetModule.call;

if (JitsiMeetModule) {
    JitsiMeetModule.call = (url, userInfo) => {
        userInfo = userInfo || {};
        call(url, userInfo);
    }
}

export default JitsiMeetModule;