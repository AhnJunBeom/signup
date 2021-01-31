import { SIGN_UP } from "../Constants/ActionTypes";

interface UserInformation {
  id: string,
  name: string,
  email: string,
  joinTime: string
}

export const signUp = (userInformation : UserInformation) => 
  ({
    type: SIGN_UP,
    id: userInformation.id,
    name: userInformation.name,
    email: userInformation.email,
    joinTime: userInformation.joinTime
  });