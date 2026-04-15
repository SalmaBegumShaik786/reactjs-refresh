/*
* <div id="parent">
    <div id="child">
      <h1></h1>
    </div>
  </div>
*
*
*
*/
const parent = React.createElement("div",
    {
        "id": "parent"
    },
    [React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "I am child 2 h1 tag"),
            React.createElement("h2", {}, "I am child2 h2 tag")
        ]
    )]
);

const heading = React.createElement("h1",
    { id: "heading", className: "headingCls" },
    "Hello React World");

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent);

root.render(parent);