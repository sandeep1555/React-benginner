const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"haading1"},"this is h1 tag"),React.createElement("h2",{id:"haading"},"this is h2 tag")]),
React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"haading2"},"this is h1 tag"),React.createElement("h2",{id:"haading"},"this is h2 tag")])]


);
const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)
console.log(root)
root.render(parent)
