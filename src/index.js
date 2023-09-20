import "./sass/base.scss";
import pngbg from "./assets/bg.png";

if (module.hot) {
  module.hot.accept();
}

const mainImage = document.getElementById("mainImage");
mainImage.src = pngbg;

const hello = require("./js/hello");
