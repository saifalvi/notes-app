const Note = ({note, selectedNote, onDelete, onTitleClick}) => {
  return ( 
    <li className={`list-group-item ${note.id === selectedNote.id ? 'active' : ''}`}>
      <span style={{cursor: 'pointer'}} onClick={() => onTitleClick(note)}>{note.title}</span>
      <i className="fa fa-times-circle float-right"
        title="Delete Note"
        style={{ cursor: 'pointer', color: 'red' }}
        onClick={() => onDelete(note.id)}/>
    </li>
  );
}
 
export default Note;