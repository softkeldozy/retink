import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Home />
      <Header />
    </div>
  );
}

export default App;
