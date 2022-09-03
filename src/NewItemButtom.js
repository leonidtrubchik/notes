import React from "react";

class NewItemButtom extends React.Component {

    handleClick = (e) => {

        let {onClick} = this.props;
        onClick && onClick(e);
      }

    render() {
        return (
            <div className="new-item-button" onClick={this.handleClick}>
                <div className="new-item-button__input">Add new note...</div>
            </div>
        );
    }
}

export default NewItemButtom;