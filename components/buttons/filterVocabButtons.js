import renderToDOM from '../../utils/renderToDom';

const filterButtonRow = () => {
  let domString = '';
  domString += `
  <div class="filterBtnRow">
  <button type="button" id="html-btn" class="btn btn-secondary">HTML</button>
  <button type="button" id="css-btn" class="btn btn-secondary">CSS</button>
  <button type="button" id="javaScript-btn" class="btn btn-secondary">JavaScript</button>
  <button type="button" id="home" class="btn btn-secondary">All</button>
</div>
  `;
  renderToDOM('#filter-button-row', domString);
};

export default filterButtonRow;
