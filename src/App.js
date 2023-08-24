import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar"
import Cards from './Components/Cards';
import Heading from './Components/Heading';
import Forms from './Components/Forms';


function App() {
    return (
        <>
            <div className="App">
              <NavBar/>
              <Cards/>
              <Heading/>
              <Forms/>
            </div>
        </>
    )
}

export default App