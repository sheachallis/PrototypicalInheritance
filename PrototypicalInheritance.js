
function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
};

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement() {
  this.items = [];
  this.addItem = function(value) {
    this.items.push(value);
  }
  this.removeItem = function(value) {
    this.items.pop(value);
  }
};

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement(); 
const s = new HtmlSelectElement(); 
