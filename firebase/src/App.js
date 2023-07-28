
import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore"
import {useState, useEffect} from "react";


function App() {
  
  const [itemList, setItemList] = useState([]);


  const itemsCollectionRef = collection(db,"items");

  useEffect(()=>{
    const getItemsList = async ()=>{
      const data = await getDocs(itemsCollectionRef);
      //console.log(data.docs);
      const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
      console.log(filteredData);
      setItemList(filteredData);
    }
    getItemsList()
  },[])
  
  
  return (
    <div>
      {itemList.map((item)=>(
        <div key={item.id}>
          <h2 style={{color:item.stock>0 ? "green":"red"}}>{item.nombre}</h2>
          <p>{item.valor}</p>
          <p>{item.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
