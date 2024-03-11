
React.js Learning Documentation:

What is React and why exactly would you use it?

	It’s a library for web and native user interfaces and it’s a Javascript library. Because React, since it's a JavaScript library, uses JavaScript in the browser to update the page and the user interface we see on that page without reloading the page. 

**<span style="text-decoration:underline;">PROS AND CONS OF REACTJS:</span>**



* **Pros of Reactjs**
    * **Component-Based Architecture**: ReactJS follows a component-based architecture, which allows developers to create reusable UI components. This modular approach makes it easier to maintain and scale large applications.
    * **Virtual DOM**: ReactJS uses a virtual DOM, which is a lightweight copy of the actual DOM. This virtual representation allows React to efficiently update the UI by only re-rendering the components that have changed, leading to better performance.
    * **JSX Syntax**: ReactJS uses JSX (JavaScript XML) syntax, which allows developers to write HTML-like code within JavaScript. This declarative approach makes it easier to visualize and understand the structure of UI components.
    * **One-Way Data Binding**: ReactJS implements one-way data binding, which means that data flows only in one direction—from parent components to child components. This makes it easier to track data flow and prevent unexpected side effects.
    * **Large Ecosystem and Community**: ReactJS has a large ecosystem of libraries, tools, and resources built around it. This vibrant community provides extensive documentation, tutorials, and support, making it easier for developers to learn and use React.
    * **React Native**: ReactJS can be used to build not only web applications but also mobile applications using React Native. This allows developers to use the same codebase to build applications for multiple platforms, reducing development time and effort.
* **Cons of Reactjs:**
    * **Learning Curve**: ReactJS has a steep learning curve, especially for developers who are new to JavaScript frameworks or functional programming concepts. Understanding concepts like JSX, virtual DOM, and state management may require some time and effort.
    * **Boilerplate Code**: ReactJS requires writing more boilerplate code compared to other libraries or frameworks. While tools like Create React App can help scaffold a new project, setting up a React project from scratch can be time-consuming.
    * **Tooling Complexity**: ReactJS ecosystem involves various tools and libraries for state management, routing, and other tasks. Managing these dependencies and integrating them into a project can add complexity to the development process.
    * **Frequent Updates**: ReactJS releases frequent updates and introduces new features, which may require developers to keep their projects up-to-date with the latest version. This can sometimes lead to compatibility issues with existing code or third-party libraries.
    * **Lack of Opinionated Structure**: Unlike some other frameworks like Angular, ReactJS does not provide a strict structure or guidelines for organizing code. This can lead to inconsistency in project structure and require additional effort to maintain code quality and consistency.
    * **Performance Optimization**: While ReactJS offers good performance out of the box, optimizing performance for complex applications may require additional effort. Developers need to be mindful of performance considerations like minimizing re-renders, optimizing component lifecycle methods, and lazy loading resources.

**<span style="text-decoration:underline;">Virtual DOM vs DOM: </span>**

DOM stands for **Document Object Model** it is the structural representation of the HTML Document. Real DOM is the **actual structure represented in the User Interface** while Virtual DOM is the** memory representation of the same**. It is a tree-like Structure consisting of all nodes in an HTML document DOM represents the Ul of your applications.



* **Real DOM:**
    * Real DOM is the actual structure of the webpage.
    * The changes and updates to the DOM are fast because of its tree-like structure but re-rendering whole documents makes the DOM Slow.
    * All UI components need to be re-rendered for every DOM update.
* **Virtual DOM:**
    * Virtual DOM is the virtual representation of Real DOM
    * React update the state changes in Virtual DOM first and then it syncs with Real DOM
    * Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions

In React app code base we dont mention or import script files in our index.html file like we do in JavaScript porject.

React Project uses Build Process, Which simply means - The code you write is not the code that gets executed in the browser. Your code is transformed before it’s handed off to the browser. 

React Projects use a build process for two main reason: 



1. The first reason is that raw unprocessed React code won't execute in the browser. Mostly because React code uses this special JSX feature. JSX code simply is this HTML code written in JavaScript files. Out of the box, this would not work because this is not a standard JavaScript feature. React will be all about including this HTML-like code in your JavaScript files, to enable this feature, the code must be transformed so that you can use it whilst writing the code but it's transformed to something JavaScript knows before the code gets executed in the browser.
2. Another reason is that the code you write would not be optimized for production, it would not be minified, for example. Minification simply means that, for example, names of variables or functions are shortened to reduce the amount of JavaScript code that's served to the user. by build process the scripts will get minified. Though it is code that's highly optimized to be as short and small as possible to reduce the amount of code that has to be downloaded by the website visitor. So that's another reason why React projects.

NodeJS is required in local setup to run ReactJs Project.

**Import and Export Syntax in JavaScript**

For example: in util.js we having a variable apiKey which we need to export and use that variable in different js files in the project to do so in util.js file

**export let apiKey = “asigjgkjiuepd”;**

and to import this variable in app.js file we need import syntax used here \
 \
**import { apiKey } from “./util.js”;**

this is one way of import and exporting things in JavaScript.

If we need to export mulitple variables from util.js \
 \
**export default “gkjdkfjagka”;**

**export let apiKey = “askdjjbkd”;**

**export let abc = “asdk”;**

Note here you can use only one default per file on exporting. \
 \
Now while importing this in app.js script file, we can use this syntax to import all the values which has been exported from util.js

**import * as utils from “./util.js”;**

Now all the values will be added to the object utils \
and we can output that values like this

**console.log(utils.apiKey)**

Objects in JavaScript can be used to group multiple values together. 

Eg:

const user = {

	name: ‘Max,

	age: 25,

};

console.log(user.name);

Objects may also contain function()** **

Eg:

const user = {

	name: ‘Max’,

	age: 25,

	greet() {

		console.log(‘hello’);

		console.log(this.age);

	};

};

user.greet();

**React Essentials: Components, JSX & State**



* Building User Interfaces with components
* Using, Sharing & Outputting Data
* Handling User Events
* Building Interactive UIs with State

React - It would be concept of working with components, Because It is reusable.

Creating ReactJs app via command “npx create-react-app my-app”. \
 \
In React a component is a JavaScript function, and it must follow two rules.



1. Name Starts with Uppercase Character, Multi word names should be PascalCase (eg: HeaderComponent)
2. Returns “Renderable” content. The function must return a value that can be rendered (“displayed on screen”) by react.

Configuring components with “Props”

React allows you to pass data to components voa a concept called “Props”



1. Props are custom HTML attributes set on components.

	For Eg: &lt;CoreConcept title=“Components” />



1. And React will merge all the props into a single object like this

	{

		title: ‘Components

	}



1. Receive Props: Props are passed to component function as the first argument by React.

	function CoreConcept(props) {

		return &lt;h3> {props.title} &lt;/h3>

	}

**Alternative Props Syntax: **We can make a file named data.js where we store all the content for a component as object and import that file in our app.js \
we can simply use like this to pull all the props into component for eg: &lt;CoreConcept {...CORE_CONCEPTS[0]}/>


 \
There’s a special “children” props we can use in react for building component. Like other props it wont be added as attributes to component tag. Instead it refers to the text between the component tags. It can be text or complex jsx structure. \
For components that take a single piece of renderable content, this approch is closer to “normal HTML usage”. \
If there’s multiple smaller piece of information that must be passed to a component we can use props as attributes. \
Ultimately, it comes down to your use-case and personal preferences.

 \
 \
There’s special props or predefined function in react.js so for click function we can simple add “onClick” attribute to the respective tag. And there are all other props available in React.js \
 \
**<span style="text-decoration:underline;">For Example: </span>**

**<span style="text-decoration:underline;"> \
</span>**function HiddenTab( { children } ) {

  function handleClick() {

    console.log("hello world");

  }

  return (

    &lt;li>

      &lt;button onClick={handleClick}>{children}&lt;/button>

    &lt;/li>

  );

}

**<span style="text-decoration:underline;">Managing State and Using Hooks: </span>**

Import something between curly braces from react, function like “useState”. This is so called “React Hook”.

All these functions that start with “use” in React projects are React hooks.

Another special thing about react hooks is that they’re technically regular functions but they must only be called inside of react component function or inside of other React Hooks.

import { useState } from ‘react’;

**<span style="text-decoration:underline;">Two Important rules of Hooks:</span>**



* Only call hooks inside of component functions. React hooks must not be called outside of react component functions. \
For Example: \
 \
This is Correct: \
function App() { \
    const [val, setVal] = useState(0); \
} \
 \
This is wrong: \
const [val, setVal] = useState(0); \
function App() { \
    \
}
* Only call Hooks on the top level. React hooks must not be called in nested code statements (eg: inside of if statements)

useState() yields an array with two elements, and it will always be exactly two elements

const stateArray = useState(‘Please Click Here’);

Manage State: Manage data and tell React to re-execute a component function via React’s useState() hook

const [counter, setCounter] = useState(0);

Here “cont[counter” is current state value provided by react, May change if the component function is executed again. and “useState(0)” is Initial state value stored by React.

And “setCounter” in const is state updating function, updates the stored value and tells react to re-execute the component function in which useState(0 was called.


React Projects must be “built” (via a build process) before deployment.

React code you write and test -> Build Process (changes and optimize your code, transforms it such that it runs in the browser also optimizes other assets like css and image files -> Deployable Files (A collection of generated files that include your optimized code and any other extra assets)

In React function we can’t return two values or component structure so we need a wrapper tag to print those two values or component in a function, but there will be an empty wrapper tag will be gets rendered to avoid this React has special fragment. \
To do import { Fragment } from ‘react’ - it’s a component in react and use &lt;Fragment>&lt;/Fragment> (or) &lt;>&lt;/>  to wrap the components in return for function where we need to output multiple values


Not all content must go into components 

Template Reference Links : \
[https://newzin-html.themescamp.com/home-default.html](https://newzin-html.themescamp.com/home-default.html)

https://creativemela.com/themeforest_html/axz_personal_portfolio_html_template/axz-portfolio-light/index.html

**React app and github deployment **

**<span style="text-decoration:underline;">Command line to create react app</span>**

“npx create-react-app project-name”

To start the server or open the app

“npm start”

**<span style="text-decoration:underline;">Command line to Create gh-pages and save it as dev dependence </span>**

“npm install gh-pages —save-dev”

and go to package.json file and add

“homepage” : “(your repo url) https://sri-balaji-coder.github.io/react-deploy”,

add these lines into **<span style="text-decoration:underline;">”scripts”</span>**

“predeploy” : “npm run build”

“deploy” : “gh-pages -d build”

open the folder in terminal

> git init

> git remote add origin “repo url”

> do the changes in files if required

> git add . (to add all the changes beacuse its inital push)

> git commit -m “commit message”

> npm run deploy   —-> (this command will deploy the changes to url)

> npm push origin master

[https://github.com/luonglearnstocode/SD4x/tree/master/HW3](https://github.com/luonglearnstocode/SD4x/tree/master/HW3)

https://charitfix.vercel.app/theme/index-two.html

[https://github.com/SoaresLance10/PennX-SD4x-Programming-for-the-Web-with-JavaScript/blob/master/HW3/calc.js](https://github.com/SoaresLance10/PennX-SD4x-Programming-for-the-Web-with-JavaScript/blob/master/HW3/calc.js)


Lifting State Up : 

Lift the state up to the closest ancestor component that has access to all components that need to work with that state. 

Ancestor passes a function that eventually changes the state via props to the child component. This allows the child component to initiate the state change. \
 \
Lets say Ancestor has two child component - child 1 and child 2. \
Ancestor passes the state value via props to the child components. \
Ancestor component manages state value that’s needed by the both child 1 and child2 component. \
 \
 \

Styling React Apps:

Static and Dynamic Styling for Pretty Apps.



* Styling with Vanilla CSS
* Scoping Styles with CSS Modules
* CSS-in-JS Styling with styled components
* Styling with Tailwind CSS
* Static and Dynamic (Conditional) styling

Styling React App with Vanilla Css - Pros and Cons

**Pros:**



* Css code is decoupled from JSX code
* you write css code as you know and love it.
* Css Code can be written by another developer who needs only a minimal amount of access to your JSX Code

**Cons:**



* You need to know Css
* Css code is not scoped to components -> Css rules may clash across copmonents. (eg: Same Css class name used in different components for different purposes)

 \
**Inline styling for tags in react.js like this:**

** \
**&lt;p style={{ color: ‘red’, textAlign: ‘left’,  }}>Some text&lt;/p> \
 \
By this we can declare inline style for tag elements in react.js

**Dynamic and Conditional inline styling:**

<span style="text-decoration:underline;">Eg:</span>

&lt;input  style={{ backgroundColor: emailNotValid ? ‘ red’ : ‘ white ‘ }} />

Here the style tag will check with emailNotValid condition, if it is true it will render red and if not it will render white into inline styling.

**Dynamic and Conditional inline styling: \
<span style="text-decoration:underline;">Eg: </span>**

&lt;input className={emailNotValid ? ‘invalid’ : undefined}

Here the className will check with emailNotValid condition if it is true it will render the invalid class in and if not it will not render any value to the className.

Another scenairo where we need to add conditional class along with the pre existing class to element or tag. \
<span style="text-decoration:underline;">Eg:</span>

&lt;label className={`label ${ emailNotValid ? ‘invalid’ : undefined } `}>&lt;/label>

Here we using `` this symbol to render both string and conditional to render classes and we can enter multiple conditional with `` using ${  }

**Scoping CSS Rules with CSS Module:**

Css Modules - Vanilla css with file-specific scoping

So to specific a particular css file to that respective module or component we need to rename the css file of the component into ‘component.module.css’ and in js file where we import, now we need to import it as object \
For Example: \
import headerStyle from './Header.module.css';

&lt;p className={headerStyle.paragraph}>&lt;/p> \
 \
Here ‘headerStyle’ is the object we declared while importing and in ClassName we declaring it as variable like we do for other values and we adding the class we required for that element or tag using ‘.’ \
like {headerStyle.paragraph} \
So by doing the we can able to specifi the css file and it’s style to apply for that particular component instead of the style affecting other components having the same class or tags

**<span style="text-decoration:underline;">Simple Button Toggle Example:</span>**

import React from 'react';

// don't change the Component name "App"

export default function App() {

    const [toggle, setToggle] = React.useState(false);

    function btnToggle() {

        setToggle(isToggled => !isToggled);

    }

    return (

        &lt;div>

            &lt;p style={{color: toggle ? 'red' : 'white'}}>Style me!&lt;/p>

            &lt;button onClick={btnToggle}>Toggle style&lt;/button>

        &lt;/div>

    );

}

**Debugging React Apps:**



* Making sense of react error messages
* Finding logical errors via the browser DevTools and Debugger
* Enabling React’s Strict Mode
* Using the React DevTools for Application analysis and Manipulation