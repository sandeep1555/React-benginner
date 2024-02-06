import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"heading1"},"this is h1 tag"),React.createElement("h2",{id:"heading"},"this is h2 tag")]),
React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"heading2"},"this is h1 tag"),React.createElement("h2",{id:"heading"},"this is h2 tag")])]


);
const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)
console.log(root)
root.render(parent)