import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainBody from '../src/components/MainBody';
import './App.css';
import PostDetails from './components/PostDetails';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<MainBody/>}/>
   <Route exact path="/post/:id" element={<PostDetails/>} /> 
  </Routes>
  
  </BrowserRouter>
     
  </>
  );
}

export default App;
