import firebase from 'firebase';

export type User = firebase.User;
export type UserPreference = {
  language: string;
};

export type Profile = {
  user?: User;
  preference: UserPreference;
};
