import React from "react";

class Note extends React.Component {
  render() {
    let {note} = this.props;
    

    if (note) {
      let {title, text} = note;

      return (
        <div className="note">
          <p className="note__header">{title}</p>
          <p className="note__note-text"> {text} </p>
        </div>
      );
    }
    
    return null;

  }
}

export default Note;