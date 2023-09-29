import React, { useState } from 'react';
import './App.css';
import CreateNote from './Components/CreateNote';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notes from './Components/Notes';

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (formData) => {
    setAddItem((prevData) => {
      return [...prevData, formData];
    })
  
  }

  const onDelete = (id) => {
    setAddItem((oldData) => 
      oldData.filter((currData, indx) =>  {
        return indx !== id;
      })
    )
  }

  return (
    <>
     <Header/>
     <CreateNote passNote={addNote} />
   

  <div className="container">
   <div className="row">
    {
      addItem.map((val, index) => {
        return  <Notes 
          key={index}
          id={index}
          title={val.title}
          notes={val.notes}
          deleteItem={onDelete}

        />
      })
     }
   </div>

  </div>
    
     <Footer />
    </>
  )
}

export default App;
