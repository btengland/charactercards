import './App.css';
import { Component } from 'react'
import Character from './components/Character'
import axios from 'axios'
import Text from './components/Text'

class App extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
        }
    }

    componentDidMount(){
        this.readCharacters()
    }

    readCharacters = () => {
        axios.get('/api/characters')
        .then(res => {
            this.setState({
                characters: res.data
            })
        })
        .catch( err => console.log(err))
    }

    addCharacter = (name, attackPoints) => {
        axios.post('/api/characters', {name, attackPoints})
        .then(res => {
            this.setState({
                characters: res.data
            })
        })
        .catch( err => console.log(err))
    }

    updateCharacter = (id) => {
        let character = this.state.characters[this.state.characters.findIndex(c => c.id === id)]
        axios.put(`/api/characters/${id}`, {character})
        .then(res => {
            this.setState({
                characters: res.data
            })
        })
        .catch( err => console.log(err))
    }

    deleteCharacter = id => {
        axios.delete(`/api/characters/${id}`)
        .then (res => {
            this.setState({
                characters: res.data
            })
        })
        .catch( err => console.log(err))
    }

    changeHP = (id, change) => {
        let index = this.state.characters.findIndex(c => c.id === id)
        let character = this.state.characters[index]
        let copyCharacters = this.state.characters.slice()
        character.healthPoints += change
        copyCharacters.splice(index, 1, character)
        this.setState({
            characters: copyCharacters
        })
    }

    changeName = (id, val) => {
        let index = this.state.characters.findIndex(c => c.id === id)
        let character = this.state.characters[index]
        let copyCharacters = this.state.characters.slice()
        character.name = val
        copyCharacters.splice(index, 1, character)
        this.setState({
            characters: copyCharacters
        })
    }

    changeAttack = (id, val) => {
        let index = this.state.characters.findIndex(c => c.id === id)
        let character = this.state.characters[index]
        let copyCharacters = this.state.characters.slice()
        character.attackPoints = val
        copyCharacters.splice(index, 1, character)
        this.setState({
            characters: copyCharacters
        })
    }

    render() {
        const mappedCharacters = this.state.characters.map( character => {
        return <Character key={character.id}
                character={character}
                updateCharacter={this.updateCharacter}
                deleteCharacter={this.deleteCharacter}
                changeHP={this.changeHP}
                changeAttack={this.changeAttack}
                changeName={this.changeName}/>
        }) 
        return <div className='body'>
            <div className='container'>{mappedCharacters}</div>
            <div><Text
            addCharacter={this.addCharacter}/></div>
        </div>
    }
}

export default App