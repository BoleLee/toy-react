for (let i of [1, 2, 3]) {
  console.log(i)
}

function createElement (tagName, attributes, ...children) {
  let e = document.createElement(tagName)
  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }
    e.appendChild(child)
  }
  return e
}

const app = <div id="a" class="c">
  <div>text Node</div>
  <div></div>
</div>

console.log(app)

document.body.appendChild(app)