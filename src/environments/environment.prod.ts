import { VARS_CONFIG } from "./env_vars";

export const environment = {
  production: true,
  apiUrl: 'https://pokeapi.co/api/v2/',
  firebaseConfig: {
    apiKey: VARS_CONFIG.APIKEY,
    authDomain: VARS_CONFIG.AUTHDOMAIN,
    databaseURL: VARS_CONFIG.DATABASEURL,
    projectId: VARS_CONFIG.PROJECTID,
    storageBucket: VARS_CONFIG.STORAGEBUCKET,
    messagingSenderId: VARS_CONFIG.MESSAGINGIDSENDER
  }
};
