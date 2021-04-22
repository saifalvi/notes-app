import EditNote from "./EditNote"
import { useState } from 'react';

const NoteDetail = ({note, onEdit, editMode}) => {
    const [isEdit, setIsEdit] = useState(editMode);

    const handleEdit = () => {
        setIsEdit(true);
    }

    const handleOnEdit = (note, detail) => {
        onEdit(note, detail);
        setIsEdit(false);
    }

    if(note.id) {
        return (
            <div className="col-md-6" >
                <hr />
                <h6 style={{lineHeight: '2.2'}}>
                    {note.title}
                    {!isEdit ? <button className="btn btn-primary btn-xs float-right" onClick={handleEdit}>Edit Note</button> : ''}
                </h6>
                { !isEdit ? <div className="card">
                    <div className="card-body" style={{minHeight: '280px'}}>
                        {note.detail}
                    </div>
                </div> : <EditNote note={note} onEdit={handleOnEdit}/> }
            </div>
    );
    } else {
        return '';
    }
    
}
 
export default NoteDetail;