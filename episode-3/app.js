import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => crerates a JS object

//const heading = React.createElement("h1", { id: "heading" }, "Hii Jenish!");

// JSX is not HTML in javascript .... its HTML like syntax
// react element using JSX
// JSX (transpiled before it reaches the js engine) - by parcel - Babel
// Babel takes the jsx and converts it into js file or react file

// JSX => React.createElement() => React element - JS object => HTMLElement(render)

//const jsxHeading = <h1 id="heading">Hello Jenish welcome to your website</h1>;

// React element

const heading = (
    <h1 className="head">
    Hello Jenish welcome to your website
    </h1>
);

// react component
    // class based components - old
    // function based components - new


// React functional component - function that returns a JSX code
// function that returns a react element

/*
other ways to return a one line function is 

1. const HeadingComponent = () => {return true};
2. const HeadingComponent = () => true

*/

const Title = () => {
    return (
        <h1 className="head">
            Jenish Web
        </h1>
    );
};

// to add react element into JSX - use {name} example: {heading}
// {} is used to add JS in JSX
const number = 10000
const HeadingComponent = () => {
    return (
        <div id="container">
            {number}
            <Title />
            <h1 className="heading"> You are now in functional component</h1>
        </div>
    );
    
};

const HeadingComponent2 = () => <h1 className="container">You are now into functional component</h1>;

// also supports multiple tags
const HeadingComponent3 = () => {
    <div>
        <h1 className="container">You are now into functional component</h1>
    </div>
};



const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading); - this will render react element

// for functional components

root.render(<HeadingComponent/>)

// this reactdom will convert the object into html file
// therefore it will replace
