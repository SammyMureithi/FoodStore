import React ,{Component } from 'react'

export class Drink extends Component {
    constructor(props) {
      super(props)
    
     
    }
  render() {
    return (
        <div className='drink'>
        <img src={this.props.image} />
        <div className='description'>
        <h1>{this.props.title}</h1>
        <p>{this.props.para}
        </p>
        </div>
        
  </div>
    )
  }
}

export default Drink

