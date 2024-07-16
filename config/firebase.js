import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestrore} from 'firebase/firestore';
import Constants from 'expo-constants';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const firebaseConfig ={

    apiKey:Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId:  Constants.expoConfig.extra.projectId,
  storageBucket:Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,

}


initializeApp(firebaseConfig);
export const auth= getAuth();
export const database =getFirestrore();