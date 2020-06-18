import React, { Component } from 'react';
import Header from './HeaderComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            Game goes here...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;