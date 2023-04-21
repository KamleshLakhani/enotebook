import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

export const NoteItemE = (props) => {
    const context=useContext(noteContext)
    const {note,updateNote}=props;
    const {deleteNote}=context;
  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
            <span className="badge bg-secondary my-3">{note.tag}</span>
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title}</h5>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  )
}
