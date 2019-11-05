import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
window.Inputmask = require("inputmask");

import "./scripts/hamburger";
import "./scripts/overlay";
import "./scripts/mask";
import "./scripts/valid";
