import {
  deleteVocab, filterVocab, getSingleVocab, getVocab
} from '../api/vocabData';
import updateVocabForm from '../components/forms/updateVocabForm';
import viewVocab from '../pages/viewVocab';
import showVocab from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then((array) => showVocab(array));
        });
      }
    }
    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then(viewVocab);
    }
    if (e.target.id.includes('update-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => updateVocabForm(vocabObj));
    }
  });

  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('vocabHome')) {
      getVocab(user.uid).then((array) => showVocab(array));
    }
  });
  document.querySelector('#filter-button-row').addEventListener('click', (e) => {
    if (e.target.id.includes('html-btn')) {
      filterVocab('html', user.uid);
    }
    if (e.target.id.includes('css-btn')) {
      filterVocab('css', user.uid);
    }
    if (e.target.id.includes('javaScript-btn')) {
      filterVocab('javascript', user.uid);
    }
    if (e.target.id.includes('home')) {
      getVocab(user.uid).then((array) => showVocab(array));
    }
  });
};
export default domEvents;
