import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showVocab = (array) => {
  clearDom();
  let domString = '';
  if (!array.length) {
    domString += '<h1>No Vocabulary Entries Found!</h1>';
    renderToDOM('#main-container', domString);
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title showTitle">${item.title}</h5>
        <p class="card-text">${item.definition}</p>
        <h5 class="card-title lang">${item.languageTech}</h5>
        <h5 class="card-title time">${item.timeSubmitted}</h5>
        <div class="flexBtn">
        <i class="btn btn-success fas trash-alt" id="view-vocab-btn--${item.firebaseKey}">View</i>
         <i id="update-vocab-btn--${item.firebaseKey}" class="fas edit btn btn-info update">Update</i>
        <i class="btn btn-success fas trash-alt" id="delete-vocab-btn--${item.firebaseKey}">Delete</i>
        </div>
        </div>
      </div> `;
    });
  }
  renderToDOM('#main-container', domString);
};

export default showVocab;
