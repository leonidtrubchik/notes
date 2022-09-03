import React from "react";

import Note from './Note';
import ItemEditModal from './ItemEditModal';

import store from './store';

class NoteGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  getData = () => {
    let notes = store.getNotes();

    this.setState({
      notes: notes
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    let { notes } = this.state;

    return (
      <div>
        <ItemEditModal onChange={this.getData}></ItemEditModal>
        <div className="note-grid">
          {
            notes.map((note, i) => <Note key={i} note={note} />)
          }
      </div>


      </div>
    );
  }
}

export default NoteGrid;