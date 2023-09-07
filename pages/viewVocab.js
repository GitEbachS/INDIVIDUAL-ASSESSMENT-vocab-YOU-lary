import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (vocabObj) => {
  clearDom();
  const domString = `
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                  <i class="btn btn-danger fas trash-alt" id="vocabHome">Home</i>
                    <h5 class="card-title">${vocabObj.title}</h5>
                    <p class="card-text">${vocabObj.definition}</p>
                    <h5 class="card-title">${vocabObj.languageTech}</h5>
                    <h5 class="card-title">${vocabObj.timeSubmitted}</h5>
                    <i id="update-vocab-btn--${vocabObj.firebaseKey}" class="fas edit btn btn-info">Update</i>
                    <i class="btn btn-danger  fas trash-alt" id="delete-vocab-btn--${vocabObj.firebaseKey}"></i>
                  </div>
                </div>`;
  renderToDOM('#view', domString);
};

export default viewVocab;
