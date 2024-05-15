import PropTypes from "prop-types"
function LogIn(props){
    const WelcomeMessage = <h2>Welcome {props.username}</h2>
    const NewUser = <h2>Please login to continue.</h2>
    return(
     props.isLogin ? WelcomeMessage : NewUser
    );
}


LogIn.prototypes = {
isLogin: PropTypes.bol,
username: PropTypes.string
}

LogIn.defaultProps={
    isLogin:false,
    username:"Guest" 
}
export default LogIn;
