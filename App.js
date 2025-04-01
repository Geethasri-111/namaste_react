import React from 'react';
import ReactDOM  from 'react-dom/client';

const jsxhead = <h1>jsx line</h1>;

const HeadingComponent = () =>(<div className='functional'><h1>functional component</h1>{jsxhead}</div>)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
