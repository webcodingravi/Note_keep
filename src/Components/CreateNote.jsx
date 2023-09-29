import React, {useState} from 'react';

function CreateNote(props) {

  const [expand, setExpand] = useState(false);
  const [formData, setFormData] = useState({
       title: "",
       notes: "",
  })
  const handlerChange = (e) => {
     const {name, value} = e.target;
     setFormData({
       ...formData,
       [name]:value,

     });
 

 }
 const addEvent = (e) => {
  e.preventDefault();
   props.passNote(formData);

   setFormData({
    title: "",
    notes: "",
   })
    
  }

  const InputEvent = () => {
    setExpand(true);
  }

  const btoNormal = () => {
    setExpand(false);
  }

  return (
    <>
    <div className="main" onDoubleClick={btoNormal}>
      <div className="container">
      <div className="create_app shadow">
        <form>

          {
          expand ? 
        <input type="text" name="title"
         value={formData.title} 
         onChange={handlerChange}
         className="form-control fs-2" 
         placeholder="Title.." />: null}<br/>
        <textarea row="" name="notes" value={formData.notes} onChange={handlerChange} onClick={InputEvent} className="form-control" placeholder="Write a Note..."></textarea>

        {
          expand ?
        <button onClick={addEvent} className="plus_icon shadow"><i class="bi bi-plus-lg"></i></button>: null }

      
        </form>
      </div>
       
    </div>
        
    </div>
      
    </>
  )
}

export default CreateNote;
