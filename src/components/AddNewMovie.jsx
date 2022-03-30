import React, { useState } from 'react'
import Modal from 'react-modal';
import { StarsRating } from './StarsRating';



const AddNewMovie = ({handelAdd}) => {
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [date, setDate] = useState("");
const [rating, setRating] = useState("");

const handelRating=(x)=>{
setRating(x)
}
const  handeleSubmit=(e)=>{
    e.preventDefault()
    const newmovie={id:Math.random(),name,image,date,rating}
    handelAdd(newmovie)
    closeModal()
    setName("")
    setDate("")
    setImage("")
    setRating("")
}

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }



  return (
    <div className='window'>
         <button onClick={openModal}>ADD</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form  onSubmit={handeleSubmit} className='babywindow'>
              <label >Movie Name</label> <br />
              <input type="text"  value={name} onChange={e=>setName(e.target.value)} /> <br />
              <label >Movie Postar</label> <br />
              <input type="text"   value={image} onChange={e=>setImage(e.target.value)}/> <br />
              <StarsRating rating={rating} handelRattnig={handelRating}/>
              <label >Movie Date</label> <br />
              <input type="date"   value={date} onChange={e=>setDate(e.target.value)}/>
              <div>
              <button className='btn'  type='submit'>Add</button>
              <button className='btn' onClick={closeModal}>Cancel</button>
              </div>
          </form>
      </Modal>
    </div>
  )
}

export default AddNewMovie