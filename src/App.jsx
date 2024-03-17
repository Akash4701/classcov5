
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Teacher from './Teacher'

import Component from "./upload"
import Student from "./Student"


function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/Teach" element={<Teacher/>} />
        <Route path="/" element={<Component/>}/>
        <Route path="/Stud" element={<Student/>} />

        </Routes>
     
      
    </Router>
  );
}

export default App;
