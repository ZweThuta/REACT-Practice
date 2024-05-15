function Button(){
    const attributes = {
    backgroundColor:"Black",
    color:"White",
    padding:"10px 20px",
    borderRadius:"5px",
    Border:"0px solid",
    cursor:"pointer"
    }
    return(
        <button style={attributes}>
            More details
        </button>
    );

}
export default Button;