import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="filter-button-row"></div>
  <div id="main-container"></div>
    <div id="form-container"></div>
    <div id="view"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
