import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderMatchObject({matchobj}) {
    return (
        <Card>
            <CardBody>{matchobj.info}</CardBody>
            <CardBody>{matchobj.val}</CardBody>
        </Card>
    );
}

class Game extends Component {

    render() {
        if (this.props.matches.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.matches.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.matches.errMess}</h4>
                    </div>
                </div>
            );
        }
        else {
            const ms = this.props.matches.matches.map((matchobj) => {
                return (
                    <div key={matchobj.id} className="col-12 col-md-5 m-1">
                        <RenderMatchObject matchobj={matchobj} /> 
                    </div> 
                );
            });
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Match Game</h3>
                        </div>
                    </div>
                    <div className="row">
                        {ms}
                    </div>
            </div> 
            );
        }

    }
}

export default Game;