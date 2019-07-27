import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBook, postBook } from '../Publics/Actions/book';


class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: []
    }
  }

  componentDidMount = async() => {
    await this.props.dispatch(getBook())
    this.setState ({
      book: this.props.book
    })
  }

  add = () => {
    
    this.props.dispatch(postBook({
      name: document.getElementById('title').value,
      image: document.getElementById('image').value,
      idCategory: document.getElementById('category').value,
      writer: document.getElementById('writer').value,
      location: document.getElementById('location').value,
      description: document.getElementById('description').value,
      

    }))
  
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button onClick={this.props.handleClose} className={'close'}>X</button>
        <p>Add Data</p>
        <div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Url Image</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Url Image ...' id={'image'} name='image_url' required />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Title</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Title ...' id={'title'} name='title' required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Category</p>
            </div>
            <div className='input'>
            <select id={'category'}>
                <option value=''>=PILIH=</option>
                <option value="1">Anak-Anak</option>
                <option value="2">Dewasa</option>
              </select>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Writer</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Writer ...' id={'writer'} name='writer' required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Location</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Location ...' id={'location'} name='location' required/>
            </div>
          </div>

          <div className='inputGroup'>
            <div className='label'>
              <p>Description</p>
            </div>
            <div className='input'>
              <textarea placeholder='Description' rows='5' name='description' id={'description'} required/>
            </div>
          </div>
          <div>
            <button className='save' onClick={this.add} >Save</button>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}
export default connect(mapStateToProps) (Modal)
