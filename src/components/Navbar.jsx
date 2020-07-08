import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <>
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">Facebook</a>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="">Profile</a></li>
      <li><a href="#">Logout</a></li>
      <li><a href="">Home</a></li>
    </ul>
  </div>
</nav>
</>

        )
    }
}

export default Navbar