/*

THINGS PARCEL IS DOING with the help of packages. So, parcel is orchestrating things

Hot Module Replacement - HMR
HMR means parcel will keep a track of all the files and update accordingly
File Watcher algorithm 
BUNDLING 
MINIFY 
Cleaning our Code 
dev production build 
super fast build algorithm 
image optimisation
caching while development 
compression 
compatible with older version of browsers
HTTPS on dev
port number
consistent hashing algorithm
zero config bundler
tree shaking - removing un-wanted code 

*/

import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
    <h1 id="title" key="h2">
        Namaste React
    </h1>
);


// React COMPONENT 

// Functional - NEW
// name of component starts with capital letter (not mandatory but a norman convention)

const HeaderComponent = () => {
    return (
        <div>
            <Heading />
            <h1>Namaste React functional component</h1>
            <h4>This is h4 tag</h4>
        </div>
    );
}

export default HeaderComponent


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
