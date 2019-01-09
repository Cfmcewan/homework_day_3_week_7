const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(){

}

DisplayView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:country-found', (event) =>{
  const countryInfo = event.detail;
  this.render(countryInfo);
});
}

DisplayView.prototype.render = function(countryInfo) {
  const container = document.querySelector('#country');
  container.innerHTML = '';

  const header = this.addElement('h2', countryInfo.name);

  const region = this.addElement('p', countryInfo.region);

  const flag = this.createImage(countryInfo);

  const listTitle = this.addElement('h3', 'Languages:');

  // const list = this.createList(countryInfo.languages);

  container.appendChild(header);
  container.appendChild(region);
  container.appendChild(flag);
  container.appendChild(listTitle);
  // container.appendChild(list);


};

DisplayView.prototype.addElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;

}

DisplayView.prototype.createImage = function(countryInfo) {
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.scr = countryInfo.flag;
  console.log(countryInfo.flag);
  return img;
  console.log(img);
}
//
// DisplayView.prototype.createList(languages) {
//   const list = document.createElement('ul');
//   languages.forEach((language) => {
//     const findName = language
//     const listItem = this.addElement('li', language);
//     list.appendChild(listItem);
//   });
//   return list
// }

module.exports = DisplayView;
