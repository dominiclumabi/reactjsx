import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
    <ul>
      <li>Burger - 25</li>
      <li>Fries - 35</li>
      <li>Drinks - 20</li>
    </ul>
    </>
  );
}

function App() {

 return(
  <>
  <Header />
  <Heading />
  <List />
  <Footer />
  </>
 );
}

export default App;
