import React from 'react';
import ReactDOM  from 'react-dom/client';

const heading = React.createElement('div',{id:"parent"},[
    React.createElement('div',{id:"childd"},[
        React.createElement('h1',{id:"heading",className:"glow"}, 'h1 tag'),
        React.createElement('h2',{id:"heading2",className:"glow"}, 'h2 tag'),
    ]),
    React.createElement('div',{id:"child2"},[
    React.createElement('h1',{id:"heading",className:"glow"}, 'h1 tag'),
    React.createElement('h2',{id:"heading2",className:"glow"}, 'h change tag'),
])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);