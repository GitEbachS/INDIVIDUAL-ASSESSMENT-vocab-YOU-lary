import filterButtonRow from '../components/buttons/filterVocabButtons';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocab from '../pages/vocab';
import vocabForm from '../components/forms/addVocabForm';
import domEvents from '../events/domEvents';
import { getVocab } from '../api/vocabData';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import logoutButton from '../components/buttons/logoutButton';

const startApp = (user) => {
  domBuilder();
  filterButtonRow();
  vocabForm();
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  getVocab(user.uid).then((array) => {
    showVocab(array);
  });
  navEvents(user);
};
export default startApp;
