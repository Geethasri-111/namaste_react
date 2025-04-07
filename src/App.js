import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';



const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
