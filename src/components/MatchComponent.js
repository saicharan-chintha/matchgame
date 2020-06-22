import React, { Component } from 'react';
import { Loading } from './LoadingComponent';
import RenderGame from './RenderGame';

class Match extends Component {

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
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.matches.errMess}</h4>
                    </div>
                </div>
            );
        }
        else {
            var inf=[],p=1;
            this.props.matches.matches.forEach((m) => {
                inf.push(
                    {
                        info : m.info,
                        id : p++
                    }
                );
            })
            return(
                <RenderGame matches={this.props.matches.matches} info={inf}/>
            );
        }

    }
}

export default Match;