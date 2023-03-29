function createCustomEl(element, text = "", classes = []) {
    const el = document.createElement(element);  
    if(element !== "main" || element !== "div" || element !== "footer") {
        console.log("INSIDE IF FOR NOT")
        el.textContent = text;
    }
    if(classes.length >= 1) {
        el.classList.add(...classes);
        return el;
    } else {
        return el;
    }
}

// console.log(createCustomEl("ul"));

const main2 = createCustomEl("main", null, ["bg-info"]);
const p3 = createCustomEl("p", "Hello, world!");
main2.appendChild(p3);

pageWrapper.appendChild(main2);

// 30 min
// Review DOM and Function
// Create either ONE function that handles something in regards to DOM
// OR
// Create a couple of DOM methods + properties


