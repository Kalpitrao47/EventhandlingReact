import { useEffect, useState } from 'react';
import './App.css';
import FormsStatic from './components/FormsStatic';
import FormsDynamicData from './components/FormsDynamicData';

function App() {
  const [options,setOptions] = useState([]);
  console.log("App DAta",options)
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch ("https://jsonplaceholder.typicode.com/albums")

    const json = await data.json();
    console.log("json data",json);
    setOptions(json);
}

  return (
    <div className="App">
       {/*  <FormsStatic/>   */}
        <FormsDynamicData options={options}/>
    </div>
  );
}

export default App;
