import { useState } from 'react';

const EditNote = ({note, onEdit}) => {
    const [detail, setDetail] = useState(note.detail);

    const handleEdit = (e) => {
        const updatedNote = {...note};
        updatedNote.detail = detail;
        onEdit(e, updatedNote);
    }

    return ( 
        <form className='edit-form mt-3' onSubmit={handleEdit}>
            <input type='submit' disabled={!detail} value='Update' className='btn btn-success' style={{ position: 'absolute', top: '34px', right: '15px'}} />
            <div className="form-group">
                <textarea
                    className='form-control'
                    type='text'
                    name='detail'
                    placeholder='Details'
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    style={{height: '280px'}}
                />
            </div>
        </form>
    );
}
 
export default EditNote;