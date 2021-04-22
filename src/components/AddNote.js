import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        note: { title: '', detail: '' }
    };

    handleChange = e => {
        const note = {...this.state.note};
        note[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ note });
    };

    handleAdd = ($event) => {
        this.props.onAdd($event, this.state.note);
        const note = {title: '', detail: ''}
        this.setState({note});
    }

    render() { 
        return (
            <div className="row">
                <div className="col-md-6">
                    <form className='add-form mt-3' onSubmit={($event) => this.handleAdd($event)}>
                        <div className="form-group">
                            <input
                            className='form-control'
                            type='text'
                            placeholder='Note Title'
                            name='title'
                            value={this.state.note.title}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                            className='form-control'
                            type='text'
                            name='detail'
                            placeholder='Details'
                            value={this.state.note.detail}
                            onChange={this.handleChange}
                            style={{height: '100px'}}
                            />
                        </div>
                        <input type='submit' disabled={!this.state.note.title || !this.state.note.detail} value='Add Note' className='btn btn-primary' />
                    </form>
                </div>
            </div>
          )
    }
}
 
export default AddNote;
