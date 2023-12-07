'use strict';

const topBar = document.getElementById('top-bar');
const pageShader = document.getElementById('page-shader');

window.onresize = setShaderHeight;

setShaderHeight();

function setShaderHeight() {
  pageShader.setAttribute('style', `height: ${topBar.offsetHeight}px;`);
};
