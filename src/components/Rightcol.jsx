import React from 'react';

class Rightcol extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <h4>Friends</h4>
                    <ul>
                        <li>
                            <a href="#">Harvard University</a>
                            <a className="text-danger" href="#">[unfriend]</a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Rightcol