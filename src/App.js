
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Profile/Profile';
import Users from './Users'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path="/user/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
