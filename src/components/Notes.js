import React,{useContext, useEffect, useRef, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import { AddNote } from './AddNote';
import { NoteItemE } from './NoteItemE';
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
    
    let navigate=useNavigate();

    const context=useContext(noteContext);
    
    const {notes,getNotes}=context;
    
    const [setNote] = useState({etitle:"",edescription:"",etag:""})

    useEffect(()=>{
        if(localStorage.getItem('token')){
            //console.log(localStorage.getItem('token'));
            getNotes();
        }
        else{
            navigate("/login")
        }
        
    },[])
  
    const ref=useRef(null);

    const updateNote=(currentNote)=>{
        ref.current.click();
        setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

  return (
    <>
    <AddNote showAlert={props.showAlert}/>
    


    {/* Logic for Notes to show */}
    <div className="row  my-3">
        <h2>Your Notes</h2>
        <div className="container">
            {notes.length===0 && ' No notes to display'}
        </div>
        {notes.map((note)=>{
          return <NoteItemE key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>;
          
        })}
    </div>
    </>
  )
}

export default Notes