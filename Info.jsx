function Info(props){
    return(
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Is Steven Friendly?:{props.isFriend ? "Yes":"No"}</p>
        </div>
    );
}
export default Info;