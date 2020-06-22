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
                                <h1>Match the following</h1>
                                <p>Rearrange the items on the right to match items on the left</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;