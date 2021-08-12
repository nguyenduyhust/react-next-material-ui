import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import * as AppActions from '~/redux/actions/app.action';
import { sUser } from '~/redux/selectors/app.selector';
import { useDispatch, useSelector } from 'react-redux';
// Misc
import { AppRoutesEnum } from '~/enums/route.enum';

export const useFirebaseAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(sUser);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(AppActions.setUser(user));
      } else {
        dispatch(AppActions.setUser(undefined));
        router.push(AppRoutesEnum.SIGN_IN);
      }
    });

    return () => unsubscribe();
  }, []);
};
