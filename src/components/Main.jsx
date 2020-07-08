import React from 'react';
import header from './header.png'

class Main extends React.Component {
    render() {
        return (
            <div>
                {/* user profile */}
                <div className="panel panel-default">
                    <img src={header} alt="jeader" className="media-object" style={{ width: '100%' }} />
                    <div className="panel-body">
                        <button className="btn btn-default">Like</button>
                        <button className="btn btn-default">Share</button>
                    </div>
                </div>
                <hr />
                {/* user profile */}
                {/* post form */}
                <form method="post" action>
                    <div className="input-group">
                        <input className="form-control" type="text" name="content" placeholder="Make a post..." />
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit" name="post">Post</button>
                        </span>
                    </div>
                </form><hr />
                {/* ./post form */}
            </div>

        )
    }
}

export default Main