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


    render(){
        return(
            <div>
                <p>Name:</p><input onChange={(e) => this.handleName(e)}
                value={this.state.name}
                placeholder='Type Here'
                type='text'/>
                <TextButtons addCharacter={this.props.addCharacter}/>
                <p>Attack Points:</p><input onChange={(e) => this.handleName(e)}
                value={this.state.attackPoints}
                placeholder='Type Here'
                type='text'/>
            </div>
        )
    }
}

export default Text