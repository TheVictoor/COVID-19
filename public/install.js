
'use strict';

window.addEventListener('beforeinstallprompt', (evt) => {
  evt.prompt();
  evt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
    });
});

window.addEventListener('appinstalled', (evt) => {
  console.log('Weather App was installed.', evt);
});
