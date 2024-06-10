import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = '/add' element = {<AddUser />}/>
          <Route path = '/all' element = {<AllUsers />}/>
          <Route path = '/' element = {<CodeforInterview />}/>

        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
