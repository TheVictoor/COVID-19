
'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');

installButton.addEventListener('click', (evt) => {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);

  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });

});

window.addEventListener('beforeinstallprompt', (evt) => {
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
});

window.addEventListener('appinstalled', (evt) => {
  console.log('Weather App was installed.', evt);
});
