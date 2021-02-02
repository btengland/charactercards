import { Component } from 'react'
import '../App.css'
import TextButtons from './TextButtons'

class Text extends Component {
   constructor(){
       super()
       this.state = {
           name: '',
           attackPoints: ''
       }
   }

   handleName = e => {
       this.setState({
           name: e.target.value
       })
   }

   handleAttackPoints = e => {
    this.setState({
            attackPoints: e.target.value
        })
    }

    handleAddCharacter = e => {
        this.props.addCharacter(this.state.name, +this.state.attackPoints)
        this.setState({
            name: '',
            attackPoints: '' 
        }) 
    }

    render(){
        return(
            <div className='text-container'>
                <div className='createcharacter'>Name:<input onChange={(e) => this.handleName(e)}
                value={this.state.name}
                placeholder='Type Here'
                type='text'/></div>
                <div className='createcharacter'>
                Attack Points:<input onChange={(e) => this.handleAttackPoints(e)}
                value={this.state.attackPoints}
                placeholder='Type Here'
                type='text'/></div>
                <div className='createcharacter'><TextButtons handleAddCharacter={this.handleAddCharacter}/></div>
            </div>
        )
    }
}

export default Text