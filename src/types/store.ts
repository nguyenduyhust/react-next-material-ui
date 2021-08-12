import firebase from 'firebase';

export type User = firebase.User;

export type Profile = {
  user?: User;
};
