import React from 'react';
import ReactDOM from 'react-dom/client';



import Header from './header';
import Banner from './banner';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    <Header/>
    <Banner/>
  </React.StrictMode>
);



