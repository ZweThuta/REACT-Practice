import profilePic from "./Photo/gojicat.jpg"
import Button from "./Button.jsx";
function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="profile"></img>
      <h2 className="card-title">Steven</h2>
      <p className="card-text">I'm a cat and I eat, I sleep, I meow.</p>
      <Button/>
    </div>
  );
}
export default Card;
