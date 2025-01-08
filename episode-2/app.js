import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id : "heading"}, 
    "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
        

/*   Creatimg nested div in react

<div id="parent" >
    <div id="child">
        <h1> I'm Jenish </h1
    </div>
</div>

*/

const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        React.createElement(
            'h1',
            {},
            "I'm jenish")
        )
); 



/*   Creatimg nested siblings

<div id="parent" >
    <div id="child">
        <h1> I'm Jenish </h1
        <h2> hello </h2>
    </div>
</div

just need to pass the third argument in array

*/


const parent_ = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement('h1',{},"I'm jenish"),React.createElement('h2',{},"Hello")]
        )
); 

root.render(parent_);


/*   Creatimg nested siblings

<div id="parent" >
    <div id="child">
        <h1> I'm Jenish </h1
        <h2> hello </h2>
    </div>
    <div id="child2">
        <h1> I'm Jenish </h1
        <h2> hello </h2>
    </div>

</div

just need to pass the third argument in array

*/


const parent__ = React.createElement(
    "div",
    {id : "parent"},
    [React.createElement(
    "div",
    {id : "child"},
    [React.createElement('h1',{},"I'm jenish"),React.createElement('h2',{},"Hello")]
    ),
    React.createElement(
        "div",
        {id : "child2"},
        [React.createElement('h1',{},"I'm jenish"),React.createElement('h2',{},"Hello")]
    )]
); 

root.render(parent__);


// Since div looks easier and this looks complex and if ity goes on it may ook even more complex.... therefore we use jsx
// core react is this and JSX makes this easier
// JSX is a syntactic sugar for React.createElement() function
// JSX is not a separate language, it's a syntax extension of JavaScript
// JSX is closer to JavaScript than HTML
// JSX is faster because it performs optimization while compiling code to JavaScript