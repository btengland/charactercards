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
        this.props.addCharacter(this.state.name, +this.state.attackPoints, this.randomInverval())
        this.setState({
            name: '',
            attackPoints: '' 
        }) 
    }

    randomInverval= () => { 
        let randomNumber = Math.floor(Math.random() * this.props.images.length)
        return this.props.images[randomNumber]
    }

    render(){
        const {name, attackPoints} = this.state
        return(
            <footer className='text-container'>
                <div className='createcharacter'>Name: <input onChange={(e) => this.handleName(e)}
                value={name}
                placeholder='Type Here'
                type='text'/></div>
                <div className='createcharacter'>
                Attack Points: <input onChange={(e) => this.handleAttackPoints(e)}
                value={attackPoints}
                placeholder='Type Here'
                type='text'/></div>
                <div className='createcharacter'><TextButtons handleAddCharacter={this.handleAddCharacter}/></div>
            </footer>
        )
    }
}

export default Text