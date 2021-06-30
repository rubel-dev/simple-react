import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import ProfileInfo from './Components/ProfileInfo/ProfileInfo';

function App() {
  return (
    <div>
       <Header></Header>
       <ProfileInfo></ProfileInfo>
    </div>
  );
}

export default App;
