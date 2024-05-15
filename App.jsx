import Card from "./Card.jsx";
import Info from "./Info.jsx";
import LogIn from "./Photo/LogIn.jsx";
function App() {
  return (
    <>
      <Card />
      <Info name="Steven" age={5} isFriend={false}/>
      <LogIn isLogin={true} username ="Amigo"/>
    </>
  );
}
export default App;
