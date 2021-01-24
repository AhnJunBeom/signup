import { SIGN_UP } from "../Constants/ActionTypes";

export const signUp = (userInformation) => 
  ({
    type: SIGN_UP,
    id: userInformation.id,
    name: userInformation.name,
    email: userInformation.email,
    joinTime: userInformation.joinTime
  });