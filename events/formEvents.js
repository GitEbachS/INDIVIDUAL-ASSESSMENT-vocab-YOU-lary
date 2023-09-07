import { getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const date = (new Date()).toLocaleString('en-US');
      const payload = {
        title: document.querySelector('#titleUpdate').value,
        definition: document.querySelector('#definitionUpdate').value,
        languageTech: document.querySelector('#languageTechUpdate').value,
        timeSubmitted: date.toString(),
        uid: user.uid,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};
export default formEvents;
