import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (vocabObj) => {
  clearDom();
  const domString = `
              <div class="card" style="width: 18rem;">
                  <div class="card-body view">
                    <h5 class="card-title showTitle">${vocabObj.title}</h5>
                    <p class="card-text">${vocabObj.definition}</p>
                    <h5 class="card-title lang">${vocabObj.languageTech}</h5>
                    <h5 class="card-title time">${vocabObj.timeSubmitted}</h5>
                    <div>
                    <i class="btn btn-success  fas trash-alt" id="delete-vocab-btn--${vocabObj.firebaseKey}">Delete</i>
                    <i class="btn btn-secondary fas trash-alt" id="vocabHome">Home</i>
                    </div>
                  </div>
                </div>`;
  renderToDOM('#view', domString);
};

export default viewVocab;
