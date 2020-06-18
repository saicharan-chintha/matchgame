import React, { Component } from 'react';
import Header from './HeaderComponent';
//import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Game from './GameComponent';
import { fetchMatches } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        matches : state.matches
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMatches : () => { dispatch(fetchMatches())}
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMatches();
    }

    render() {
        return (
            <div>
                <Header />
                <Game matches={this.props.matches} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);