import { Component } from 'react'
import '../App.css'
import CharacterButtons from './CharacterButtons'

class Character extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            attackPoints: 0,
            healthPoints: 0
        }
    }

    handleEdit = (e) => {
        this.props.updateCharacter(this.props.character.id)
    }

    handleDelete = (e) => {
        this.props.deleteCharacter(this.props.character.id)
    }

    increaseHP = () => {
        this.props.changeHP(this.props.character.id, 1)
    }

    decreaseHP = () => {
        this.props.changeHP(this.props.character.id, -1)
    }

    render(){
        const {name, healthPoints, attackPoints, id} = this.props.character
        return(
            <div className='all'>
                <div className='character'>
                    <p>Name: <input onChange={e => this.props.changeName(id, e.target.value)} type='text' value={name}/></p>
                    <p>HP: 
                        <button className='hpbutton' onClick={e => this.decreaseHP()}>-</button>
                        {healthPoints}
                        <button className='hpbutton' onClick={e => this.increaseHP()}>+</button></p>
                    <img className="picture" src='https://source.unsplash.com/random' alt='Character'/>
                    <p>Attack Points: <input onChange={e => this.props.changeAttack(id, e.target.value)} type='number' value={attackPoints}/></p>
                </div>
                <CharacterButtons handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default Character