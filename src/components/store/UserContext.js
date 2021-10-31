import { atom } from "recoil";

export const UserContext = atom({
  key: "UserContext",
  default: {username: 'jjh', age: 20, gender: 'F'}
});