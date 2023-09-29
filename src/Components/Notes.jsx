import React from 'react';

function Notes(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  }

  return (
    <> 
            <div className="col-12 col-md-4">
              <div className="notes shadow">
                <div className="content">
              <h1>{props.title}</h1>
             <p>{props.notes}</p>
             </div>
              <div className="icon shadow">
              <button onClick={deleteNote}><i class="bi bi-trash3"></i></button>
              </div>


              </div>
           

            </div>
            
      
    </>
  )
}

export default Notes;
