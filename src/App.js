import { useEffect, useState } from 'react';
import './App.css';
import FormsStatic from './components/FormsStatic';
import FormsDynamicData from './components/FormsDynamicData';
import HideShow from './components/HideShow';
import FormValidation from './components/FormValidation';
import ParentComponent from './components/ChildrenProps';
import UseRef from './components/UseRef';
import ForwardRef from './components/ForwardRef';
import PostMethod from './HTTP METHODS/PostMethod';
import HigherOrderComponent from './components/HigherOrderComponent';
import DeleteMethod from './HTTP METHODS/DeleteMethod';


function App() {
  const [options,setOptions] = useState([]);
  // console.log("App DAta",options);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch ("https://jsonplaceholder.typicode.com/albums")

    const json = await data.json();
    // console.log("json data",json);
    setOptions(json);
}

  return (
    <div className="App">
       {/*  <FormsStatic/>   */}
  {/*<FormsDynamicData options={options}/>*/}
  {/*<HideShow/>*/}
  {/*<FormValidation/>*/}
  {/*<ParentComponent>
  <p>These are the children of the ParentComponent.</p>
  <p>Children can be any React elements or components.</p>
  </ParentComponent>*/}
{/*<UseRef/>*/}
{/*<ForwardRef/>*/}
  {/*<PostMethod/>*/}
  {/*<HigherOrderComponent/>*/}
  <DeleteMethod/>
  {/*<PostMethod/>*/}

    </div>
  );
}

export default App;
