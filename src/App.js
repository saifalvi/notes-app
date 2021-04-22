import React, { Component } from 'react';
import Notes from './components/Notes';
import NavBar from './components/Navbar';
import AddNote from './components/AddNote';
import NoteDetail from './components/NoteDetail';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = { 
    notes: [
      {id: 1, title: 'Note 1: What is Lorem Ipsum?', detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
      {id: 2, title: 'Note 2', detail: 'Note 2 description'},
      {id: 3, title: 'Note 3', detail: 'Note 3 description'},
      {id: 4, title: 'Note 4', detail: 'Note 4 description'},
      {id: 5, title: 'Note 5', detail: 'Note 5 description'},
      {id: 6, title: 'Note 6', detail: 'Note 6 description'}
    ],
    selectedNote: {}
  }

  handleAdd = (e, newNote) => {
    e.preventDefault();
    newNote.id = uuidv4();
    const notes = [newNote, ...this.state.notes];
    this.setState({notes});
  }

  handleDelete = id => {
    const notes = this.state.notes.filter(r => r.id !== id);
    this.setState({notes});
    if(this.state.selectedNote.id === id) {
      const selectedNote = {};
      this.setState({selectedNote});
    }
  }

  handleTitleClick = note => {
    const selectedNote = note;
    this.setState({selectedNote});
  }

  handleEdit = (e, note) => {
    e.preventDefault();
    const notes = [...this.state.notes];
    const index = notes.findIndex(n => n.id === note.id);
    notes[index] = note;
    const selectedNote = {...note}
    this.setState({notes});
    this.setState({selectedNote})
  }

  render() { 
    return ( 
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <AddNote onAdd={this.handleAdd}/>
          <div className="row">
            <Notes 
              selectedNote={this.state.selectedNote} 
              notes={this.state.notes} 
              onDelete={this.handleDelete} 
              onTitleClick={this.handleTitleClick}/>
            <NoteDetail 
              editMode={false} 
              note={this.state.selectedNote} 
              onEdit={this.handleEdit} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
