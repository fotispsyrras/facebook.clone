import React from 'react';
// import Youtube from './Youtube.jsx';
import Navbar from './Navbar.jsx'
// import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
import './App.css'
import Leftcol from './Leftcol.jsx'
import Main from './Main.jsx'
import Posts from './Posts/Posts.jsx'
import Rightcol from './Rightcol.jsx'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
           <div className="row">
             <div className="col-md-3">
               <Leftcol/>
             </div>
             <div className="col-md-6">
               <Main />
               <Posts/>
             </div>
             <div className="col-md-3">
               <Rightcol />
             </div>
           </div>
        </main>
        <Footer/>
      </>
    );
  }
}

export default App;