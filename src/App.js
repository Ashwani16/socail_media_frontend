import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { login } from './redux/user/action';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './AllRouts';

function App() {
//   const dispatch=useDispatch();

// dispatch(login("user1",1234))
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
