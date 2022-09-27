import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

let user = {
  avatar: "human.png"
}

function Heading(){
  return(
    <>
    <h1 className="list-head">Doms Grocery List</h1>
    </>
  );
}

function List(){
  return(
    <>
    <ul className="order-list">
      <li>Burger - 25</li>
      <li>Fries - 35</li>
      <li>Drinks - 20</li>
    </ul>
    </>
  );
}

function Login(){
  return(
    <>
    <h1>Please login your account</h1>
    <input type= "text" />
    <button>Login</button>
    </>
  );
}

function UserDetails({ props }) {
  return (
    <>
      <img src={user.avatar} alt="avatar" />
    </>
  );
}



function App() {

  let isLoggedIn = true;

  if (isLoggedIn) {
    return(
    <> 
        <UserDetails props />
        <Header />
        <Heading />
        <List />
        <Footer />
    
    </>);
  }

  else{
    return(
      <>
        <Login />
      </>
    );
  }

 return(
  <>
  <Header />
  <Heading />
  <Login />
  <List />
  <Footer />
  </>
 );
}

export default App;
