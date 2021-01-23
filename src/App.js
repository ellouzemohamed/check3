import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './Component/Profile/Profile';
import img from './photoProfile.png';




const App = () => {
   
const styleobject = {color:"red" , Textalign:"center",margin:"20px"}

  const handlname = (name) =>  {
    alert(`your name is : ${name}`)
  }
  
  
  const myprofile=[{
    fullname:'Mohamed',
    bio:'ccc',
    profession:'react componet'

  }]
  return (
      <div style={styleobject}>
   <Profile myprofile={myprofile} handlname={handlname}>
     {img}
   </Profile>
   
      </div>
  )
}

export default App;


