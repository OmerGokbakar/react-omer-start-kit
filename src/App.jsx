import './App.css'
import PacketList from './Items/Item';
import { useState } from 'react';


function App() {

  const [color, setColor] = useState("blue");
  const styles={
    backgroundColor: '#e25e5eee',
    padding: "10px 20px",

  }

  return(
    <div className='container'>
      <h1>To DO List</h1>
      <PacketList/>
      <h1>My Favourite Color is {color}</h1>
      <button style={styles} type='button' onClick= {() => {setColor("red")}}>red</button>
      <button style={{backgroundColor:"#18c443ee", padding: "10px 20px"}} type='button' onClick={() => {setColor("green")}}>green</button>
    </div>

    
  );
  
}

export default App
