const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const displayView = new DisplayView();
  displayView.bindEvents();

  const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents()

  const countries = new Countries();
  countries.bindEvents();
  countries.getData();
});
