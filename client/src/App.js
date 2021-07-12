import './App.css';
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import Nav from './components/Nav';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
    </div>
    </BrowserRouter>
  );
}

export default App;
