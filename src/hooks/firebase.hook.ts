import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
// Misc
import { AppRoutesEnum } from '@enums/route.enum';

export const useCurrentUser = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const router = useRouter();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        router.push(AppRoutesEnum.SIGN_IN);
      }
    });
  }, []);

  return user;
};
