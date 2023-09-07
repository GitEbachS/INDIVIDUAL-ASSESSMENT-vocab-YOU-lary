import renderToDOM from '../../utils/renderToDom';

const filterButtonRow = () => {
  let domString = '';
  domString += `
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" id="html-btn" class="btn btn-primary">HTML</button>
  <button type="button" id="css-btn" class="btn btn-primary">CSS</button>
  <button type="button" id="javaScript-btn" class="btn btn-primary">JavaScript</button>
  <button type="button" id="home" class="btn btn-primary">All</button>
</div>
  `;
  renderToDOM('#filter-button-row', domString);
};

export default filterButtonRow;
