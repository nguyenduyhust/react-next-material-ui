import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import * as ImageUtils from '~/utils/image.util';

const firebaseConfig = {
  apiKey: 'AIzaSyCsr-QuOiq9PUqUpwoK_GS5EXXVuB-VLLY',
  authDomain: 'react-next-material-ui.firebaseapp.com',
  projectId: 'react-next-material-ui',
  storageBucket: 'react-next-material-ui.appspot.com',
  messagingSenderId: '943280054410',
  appId: '1:943280054410:web:dfca0adfcce799dd448d73',
};

export const USER_ASSESTS_DIR = '/user-assets';

export type SignUpArgs = {
  email: string;
  password: string;
  displayName: string;
};

export type SignInArgs = {
  email: string;
  password: string;
};

export interface UploadUserAvatarAssetArgs {
  uid: string;
  image: string;
}

export type SnapshotUserPreferenceArgs = {
  uid: string;
  callback: (preference: { language: string }) => void;
};

export type CreateUserPreferenceArgs = {
  uid: string;
  preference: {
    language: string;
  };
};

export type UpdateUserPreferenceArgs = {
  uid: string;
  preference: {
    language?: string;
  };
};

export class FirebaseService {
  public static initialize() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  public static async signUp(args: SignUpArgs) {
    const { email, password, displayName } = args;

    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    if (!user) {
      throw new Error('Create user fail');
    }

    let avatarUrl: string | undefined = undefined;
    const avatar = ImageUtils.generateAvatarFromName(displayName);

    try {
      avatarUrl = await this.uploadUserAvatarAsset({ uid: user.uid, image: avatar });
    } catch (error) {
      // Don't need to handle
    }

    try {
      await this.createUserPreference({ uid: user.uid, preference: { language: 'en' } });
    } catch (error) {
      // Don't need to handle
    }

    try {
      await user.updateProfile({
        displayName,
        photoURL: avatarUrl,
      });
    } catch (error) {
      // Don't need to handle
    }
  }

  static async signIn(args: SignInArgs) {
    const { email, password } = args;
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  static async uploadUserAvatarAsset(args: UploadUserAvatarAssetArgs) {
    const { uid, image } = args;
    const storageRef = firebase.storage().ref();
    const userAssetsRef = storageRef.child(`${USER_ASSESTS_DIR}/${uid}`);
    const avatarRef = userAssetsRef.child('avatar.png');
    await avatarRef.putString(image, 'data_url');
    return avatarRef.getDownloadURL();
  }

  public static snapshotUserPreference(args: SnapshotUserPreferenceArgs) {
    const { uid, callback } = args;
    const db = firebase.firestore();
    return db
      .collection('users')
      .doc(uid)
      .onSnapshot((doc) => {
        if (doc && doc.exists) {
          const data = doc.data();
          data && callback(data.preference);
        }
      });
  }

  public static createUserPreference(args: CreateUserPreferenceArgs) {
    const { uid, preference } = args;
    const db = firebase.firestore();
    return db.collection('users').doc(uid).set({
      preference,
    });
  }

  public static updateUserPreference(args: UpdateUserPreferenceArgs) {
    const { uid, preference } = args;
    const db = firebase.firestore();
    return db.collection('users').doc(uid).update({
      preference,
    });
  }
}
