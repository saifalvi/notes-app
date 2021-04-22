import Note from './Note'

const Notes = ({notes, selectedNote, onDelete, onTitleClick}) => {
    return ( 
        <div className="col-md-6">
            <hr />
            <h6>All Notes</h6>
            <ul className="list-group" style={{height: '300px', overflowX: 'hide', overflowY: 'auto'}}>
            { notes.map(
                (note, index) => <Note key={index} 
                    note={note}
                    selectedNote={selectedNote}
                    onDelete={onDelete} 
                    onTitleClick={onTitleClick}/>) 
            }
            </ul>
        </div>
     );
}
 
export default Notes;