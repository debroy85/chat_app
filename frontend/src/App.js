
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <Router>
          <div className='App'> 
            <Routes>

                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/chats" element = {<ChatPage/>}/>

            </Routes> 
          </div>
        </Router>
  );
}

export default App;
