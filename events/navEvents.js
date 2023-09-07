import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const navEvents = (user) => {
  const form = document.querySelector('#submit-vocab');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const date = (new Date()).toLocaleString('en-US');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#languageTech').value,
        timeSubmitted: date.toString(),
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
      form.reset();
    }
  });
};
export default navEvents;
