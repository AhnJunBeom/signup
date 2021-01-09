import { SIGN_UP } from "../Constants/ActionTypes";

export const signUp = (userInformation) => 
  ({
    type: SIGN_UP,
    id: userInformation.id,
    pw: userInformation.pw,
    name: userInformation.name,
    phoneNumber: userInformation.phoneNumber,
    email: userInformation.email,
    allowAd: userInformation.allowAd,
    joinTime: userInformation.joinTime
  });