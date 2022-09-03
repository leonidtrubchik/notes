import React from "react";

import NewItemButtom from './NewItemButtom';
import store from './store';


class ItemEditModal extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      isEdit: false,
      text:'',
      title:''
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleGlobalClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleGlobalClick);
  }

  handleGlobalClick = (e) => {

    if (this.ref && this.ref.current && this.ref.current.contains(e.target)) { 
      this.startEdit();
    } else {
      this.stopEdit();
    }
  }

  startEdit = () => {
    this.setState({isEdit: true});
  }

  stopEdit = () => {
    let {title, text} = this.state;
    let { onChange } = this.props;
    
    if (title || text) {
      store.addNote({
        title: title,
        text: text
      })

      onChange && onChange();
    }

    this.setState({isEdit: false, title:'',text:''});
  }

  handleClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.startEdit();
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }


  render() {
    console.log(this.state);

    return (
      <div>
        
        <NewItemButtom onClick={ this.handleClick }/>
        {this.renderEdit()}
      </div>
    );
  }
  
  renderEdit() {
    let { isEdit } = this.state;

    if (isEdit) {
      return (
        <div className="item-edit-modal" ref={this.ref} >

          <div className="item-edit-modal__caption">
            <input type="text" placeholder="Заголовок" 
              onChange={e => this.handleChange('title', e)}
            />
          </div>
  
          <div className="item-edit-modal__body">
            <textarea placeholder="Текст" 
              onChange={this.handleChange.bind(this, 'text')}
            />
          </div>

        </div>
      );
    }

    return null;
  }
}

export default ItemEditModal;