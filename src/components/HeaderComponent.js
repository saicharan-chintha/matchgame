import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Match the following Game</h1>
                                <p>Drag the options into the correct boxes!!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;