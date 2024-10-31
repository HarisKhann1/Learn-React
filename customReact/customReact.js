
customRender = (reactElement, container) => {

// version 1
/*
    // create a new element
    const newElement = document.createElement(reactElement.type);
    // set the props of the new element
    newElement.setAttribute('href', reactElement.props.href);
    newElement.setAttribute('target', reactElement.props.target);
    // set the children of the new element
    newElement.textContent = reactElement.children;
    // append the new element to the container
    container.appendChild(newElement);
*/    

// version 2
    // create a new element
    const newElement = document.createElement(reactElement.type);
    newElement.textContent = reactElement.children;
    // set the props of the new element
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        newElement.setAttribute(prop, reactElement.props[prop]);
    }        
    container.appendChild(newElement);

// React element structure    
/*
    // in react
    <tag> like this <a>
    <props> like this href, target ==> {a href="http://www.google.com" target="_blank"},
    <children> like this Click me ==> 'Click me'
    // write variable name directly
*/

};

const anotherElement = 'chai aur code';
const reactElement = {
    type: 'a',
    props: {
        href: 'http://www.google.com',
        target: '_blank',
    },
    children: 'Click me',
}

// Get the main container
const mainContainer = document.querySelector('#root');

// Custom render function to render react element to the DOM 
customRender(reactElement, mainContainer);