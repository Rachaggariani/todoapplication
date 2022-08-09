
import React,{useState,useEffect} from 'react';
import SignIn from './Components/SignIn';
import Cardlist from './Components/Cardlist';
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTask from './Components/AddTask';
function App() {
  const notify = () =>toast("please connect!");
  const notiifyName=(name)=>toast(`Welcome ${name}`);
  const [Tasks,setTasks]=useState([
    {id:22, desc:'hello'},
  {id:23, desc:'doing my homework'},
]);
const addTask=(task)=>{
  setTasks([...Tasks, task]);
    }
  const [user,setuser]=useState({email:"",name:"",connected: false});
  
  
  useEffect(()=>{
if(!user.connected){
  notify();
}
  if(user.connected){
    notiifyName(user.name);}
  },[user.connected])
 
  return (
   
    <div >
<ToastContainer/>
        {user&&<ToastContainer/>}
      {!user.connected && <SignIn user={user} setuser={setuser}/>}
     
     {user.connected &&(
     <div style={{textAlign:"center"}}>
      <AddTask addTask={addTask}/>
      <div style={{display:"flex",justifyContent:"cente"}}>
   {Tasks.length > 0 ? (
   Tasks.map((elt)=>(
   <Cardlist key={elt.id} task={elt} Tasks={Tasks} setTasks={setTasks}
   />
   ))
  ):(
    <Spinner animation="border" />
  )}
</div>
</div>
)}
</div>
);
}

export default App;
