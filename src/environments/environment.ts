// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCYNQmeziLs2tEm5v52BWnUXUGlK8xYp5k',
    authDomain: 'rs-pb-db.firebaseapp.com',
    databaseURL: 'https://rs-pb-db.firebaseio.com',
    projectId: 'rs-pb-db',
    storageBucket: 'rs-pb-db.appspot.com',
    messagingSenderId: '1064771188943'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
