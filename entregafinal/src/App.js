import NavBar from './components/navbar/NavBar'
import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore"
import {useState, useEffect} from "react";


function App() {
  
  const [itemList, setItemList] = useState([]);

  const itemsProductosRef = collection(db,"productos");
  console.log(itemsProductosRef);

  useEffect(()=>{
    const getItemsList = async ()=>{
      const data = await getDocs(itemsProductosRef);
      //console.log(data.docs);
      const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
      console.log(filteredData);
      setItemList(filteredData);
    }
    getItemsList()
  },[])


  
  
  return (
    <div className='App'>
    <NavBar/>
    <div>
      {itemList.map((item)=>(
        <div key={item.id}>
          <h2>{item.nombre}</h2>
          <h2>{item.categoria}</h2>
          <h2>{item.descripcion}</h2>
          <p>{item.precio}</p>
          <p>{item.stock}</p> 
          <img src={item.foto}/>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
