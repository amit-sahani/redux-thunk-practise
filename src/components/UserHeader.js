import {connect} from "react-redux";
import {fetchUser} from '../actions';
import {useEffect} from 'react';

const UserHeader =(props)=>{

    useEffect(()=>{
        props.fetchUser(props.id)
    },[]);


    return(!props.user ?"": <div className="header">{props.user.name}</div>)
}

const mapStateToProps = (state, ownProps) =>{
    return {user: state.users.find(user => user.id===ownProps.id)}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);