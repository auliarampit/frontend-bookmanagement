import React, {Component} from 'react'
import '../style/Card.css'
import '../style/Button.css'
import {connect} from 'react-redux';

import { Link } from 'react-router-dom'
import { getBook } from '../Publics/Actions/book'

function text (text) {
  console.log(text)
  if (text.length > 20) {
    let textSplit = text.substr(0, 20)
    return `${textSplit} ...`
  } else {
    let textSplit = text
    return `${textSplit}`
  }
}

class Card extends Component  {
  state = {
    book : []
  }
  componentDidMount = async ()=>{
    await this.props.dispatch(getBook())
    .then(()=>{
      this.setState({
        book : this.props.book
      })
    })

  }

  // getBooks = async () => {
  //   await this.props.dispatch(getBook())
  //   .then(()=>{
  //     this.setState({
  //       book : this.props.book
  //     })
  //   })
  // }
  
  render(){
    console.log(this.props.book)
  return (
    <div className='card'>
      <button className='add' onClick={this.props.showModal} >{localStorage.token ? 'ADD' : 'DONATE'}</button>
      <div className='card-item'>
        {
        this.state.book.map(
            item => {
              return (
                <Link to={`/book/${item.idBook}`}
                >
                  <div className='item' id='items' idBook={item.idBook}>
                    <img src={item.image ? item.image : 'http://rsudblambangan.banyuwangikab.go.id/asset/foto_berita/no-image.jpg'} alt='gambar' />
                    <div>
                      <p>{text(item.nameBook)}</p>
                    </div>
                    <div>
                    </div>
                  </div>
                </Link>
              )
            }
          )
        }
      </div>

    </div>
  )
  }
}

const mapStateToProps = ( state ) => {
  return{
    book:state.book.bookList
  }
}

export default connect(mapStateToProps)(Card);
