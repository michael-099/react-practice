import React from "react";
import { ReactDOM ,useState} from "react";
import "./increment.css";

function Count(props){
    const [state,setState]=useState(0);

    function increment(prevCount){
      setState((prevCount)=>prevCount+1)}
    function reset(prevCount){
      setState((prevCount)=>prevCount=0)
    }
   
      return (
    <div className='card_i'>
    <div className="b">
    <p>{props.title} </p></div>
    <div className="b"><p>{state}</p>
    </div>
    <div className="b"><button onClick={increment}>increment</button>
    <button onClick={reset}>reset</button>
    </div>
    
   
       </div>
       )
}
export default Count ;
// Here's a basic template for managing state in a React component using the useState hook:

// import React, { useState } from 'react';

// function MyComponent() {
//   const [state, setState] = useState(initialState);

//   const handleStateChange = (newValue) => {
//     setState(newValue);
//   };

//   return (
//     <div>
//       <h1>React State Management</h1>
//       <p>Current State: {state}</p>
//       <button onClick={() => handleStateChange(newValue)}>Change State</button>
//     </div>
//   );
// }

// export default MyComponent;

// Certainly, let's break down the template and explain each part:

// 1. Import Statements for necessary modules:
// 
//    import React, { useState } from 'react';

//      - `useState`: A hook from React that allows us to manage state within functional components.

// 2. Functional Component**:
   
//    function MyComponent() {}
//    - We define a functional component named `MyComponent`. You should replace `MyComponent` with your desired component name.

// 3. State Initialization:
//    
//    const [state, setState] = useState(initialState);
//   
//    - We use the `useState` hook to initialize state and its updater function.
//    - `state`: This variable stores the current state value.
//    - `setState`: This function is used to update the state.
//    - `initialState`: Replace this with the initial value for your state.

// 4. State Change Function:
//  
//    const handleStateChange = (newValue) => {
//      setState(newValue);
//    };
//   
//
//    - We define a function `handleStateChange` that takes a `newValue` as a parameter and updates the state using `setState`.

// 5. Component Rendering:
//  
//    return (
//      <div>
//        <h1>React State Management</h1>
//        <p>Current State: {state}</p>
//        <button onClick={() => handleStateChange(newValue)}>Change State</button>
//      </div>
//    );
//    
//    - In the `return` statement, we define the JSX that will be rendered by the component.
//    - It includes an `<h1>` element for a title, a `<p>` element to display the current state, and a `<button>` to trigger a state change.
//    - The value of the state is displayed using `{state}` within the JSX.
//    - When the "Change State" button is clicked, it calls the `handleStateChange` function with a `newValue`.

// 6. Component Export:
//  
//    export default MyComponent;
//   
//    - We export the `MyComponent` so that it can be used in other parts of your application.

// This template provides a foundation for creating a React component with state management. You can customize it by specifying your component's name, initial state, and state update logic to suit your specific use case.


// !!!!!!!!!!!!!!can we change color or style usign this ?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Yes, you can change the color or style of elements in your React application using state management. State management in React allows you to dynamically update the styles and appearance of your components based on user interactions, data changes, or other conditions. Here's how you can do it:

// 1. Conditional Styling: You can define different styles or CSS classes as part of your component's state. Then, based on specific conditions or user interactions, you can update the state to apply different styles or classes to your elements. For example, you can change the background color of a button when it's clicked.

// 2. Inline Styles: React allows you to apply styles directly to elements using the `style` attribute. You can define a style object in your component's state and update it dynamically to change the appearance of elements. For instance, you can change the text color of a paragraph based on certain conditions.

// 3. Dynamic Class Names: You can use class names that are determined by the component's state. This is useful when you have predefined CSS classes for different styles, and you toggle classes based on state changes.

// Here's a simplified example of how you can change the background color of a `div` element using React state and conditional rendering:


// import React, { useState } from 'react';

// function App() {
//   const [isHighlighted, setIsHighlighted] = useState(false);

//   const toggleHighlight = () => {
//     setIsHighlighted(!isHighlighted);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           backgroundColor: isHighlighted ? 'yellow' : 'transparent',
//         }}
//       >
//         This div can change color.
//       </div>
//       <button onClick={toggleHighlight}>Toggle Color</button>
//     </div>
//   );
// }

// export default App;


// In this example, clicking the "Toggle Color" button changes the background color of the `div` based on the state `isHighlighted`. This demonstrates how you can dynamically change styles in a React component based on state changes or user interactions.



// !!!!!!!!!!!!!!!!!!!!!
// The code snippet `style={{ backgroundColor: isHighlighted ? 'yellow' : 'transparent' }}` is defining an inline style for a React element. Let me break it down for you:

// 1. `style`: This is an attribute of a React element that allows you to apply inline CSS styles to that element.

// 2. `{}`: In JSX (the syntax used in React for rendering components), curly braces `{}` are used to enclose JavaScript expressions or objects. This is how you embed JavaScript code within JSX.

// 3. `backgroundColor`: This is a CSS property for setting the background color of an element. It specifies the color of the background.

// 4. `isHighlighted ? 'yellow' : 'transparent'`: This is a JavaScript ternary conditional expression. It checks the value of the `isHighlighted` variable. If `isHighlighted` is `true`, it sets the background color to 'yellow', and if it's `false`, it sets it to 'transparent'.

// So, the `style` attribute is dynamically setting the background color of the element based on the value of the `isHighlighted` state variable. If `isHighlighted` is `true`, the background color will be 'yellow', and if it's `false`, the background color will be 'transparent'. This allows you to change the element's background color dynamically based on the value of `isHighlighted`.