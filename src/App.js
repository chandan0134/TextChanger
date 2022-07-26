
import { startTransition } from 'react';
import './App.css';
 import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
//import About from './component/About';
function App() {
  return (
   <>
   <Navbar titile="TextUtils" aboutText="About TextUtils"/>
   <div class="container">
   <TextForm/>

   </div>
   </>
  );
}

export default App;
