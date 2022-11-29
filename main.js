const p = document.querySelector("p");
const words = p.innerText.split(" ");
p.innerText = null;

function createNode(word, index) {
    const span = document.createElement("span");
    span.innerText = word + " "
    span.style = "--i:" + index;
    p.appendChild(span)
}

words.forEach(createNode)