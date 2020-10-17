import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends Component {

    componentDidMount(){
        this.props.fetchUser(this.props.userId);

    }

    render() {

        const {user} = this.props;

        if(!user){
            return <div className="header">nothing to return</div>;

        }

        return <div className="header">{user.name}</div>;

    }
}

const mapStateToProps = (state, OwnProps) =>{
    return { user: state.users.find(user => user.id === OwnProps.userId) };

}

export default connect(
    mapStateToProps,
    {fetchUser}
)(UserHeader);