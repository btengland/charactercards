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

    updateCharacter = (id, name, attackPoints) => {
        axios.put(`/api/characters/${id}`, {name, attackPoints})
        .then(res => {
            this.setState({
                characters: res.data
            })
        })
        .catch( err => console.log(err))
    }

    deleteCharacter = id => {
        axios.delete(`/api/character/${id}`)
        .then (res => {
            this.setState({
                characters: res.data
            })
        })
        .catch( err => console.log(err))
    }

    render() {
        const mappedCharacters = this.state.characters.map( character => {
        return <Character key={character.id}
                character={character}
                updateCharacter={this.updateCharacter}
                deleteCharacter={this.deleteCharacter}/>
        }) 
        return <div>
            <div>{mappedCharacters}</div>
            <div><Text addCharacter={this.addCharacter}/></div>
        </div>
    }
}

export default App