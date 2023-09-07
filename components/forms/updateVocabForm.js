import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const updateVocabForm = (vocabObj = {}) => {
  clearDom();
  let domString = '';
  domString += `
  <form id="update-vocab--${vocabObj.firebaseKey}">
  <div class="mb-3">
    <label for="titleUpdate" class="form-label"></label>
    <input type="text" class="form-control" id="titleUpdate" aria-describedby="emailHelp" placeholder="Enter code word" value="${vocabObj.title || ''}" required>
  <div class="mb-3">
    <label for="definitionUpdate" class="form-label"></label>
    <textarea class="form-control" placeholder="Definition" id="definitionUpdate" style="height: 100px">${vocabObj.definition || ''}</textarea>
  </div>
  <select class="form-select" id="languageTechUpdate" aria-label="Default select example">
    <option selected>${vocabObj.languageTech || ''}</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
    <option value="JavaScript">JavaScript</option>
</select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;
  renderToDOM('#form-container', domString);
};

export default updateVocabForm;
