import React from 'react';
import logo from './logo.jpg'

class Leftcol extends React.Component {
    render() {
        return (
            <>
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <img src={logo} alt="logo" width="100%" style={{ borderRadius: '50%' }} />
                        <h4>PeopleCert</h4>
                        <p>@peoplecert.org</p>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h4>Edit profile</h4>
                        <form method="post" action="home.html">
                            <div className="form-group">
                                <input className="form-control" type="text" name="status" placeholder="Status" defaultValue />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="location" placeholder="Location" defaultValue />
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" name="update_profile" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>

        )
    }
}

export default Leftcol


