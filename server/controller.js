const characters = []

let id = 1

module.exports = {
    readCharacters: (req, res) => {
        if(req.query.searchTerm){
            console.log(req.query.searchTerm)
            let filteredCharacters = characters.filter(char => {
                return char.name.toLowerCase().includes(req.query.searchTerm.toLowerCase())
            })
            res.status(200).send(filteredCharacters)
        } else {
            res.status(200).send(characters)
        }
    },
    addCharacter: (req, res) => {
        const {name, attackPoints, interval} = req.body
        const newCharacter = {id, name, attackPoints, healthPoints: 0, interval}
        characters.push(newCharacter)
        id++
        res.status(200).send(characters)
    },
    updateCharacter: (req, res) => {
        const {name, attackPoints} = req.body.character
        const i = characters.findIndex( characters => characters.id === +req.params.id)
        let character = characters[i]

        characters[i] = {
            id: character.id,
            name: name || character.name,
            attackPoints: +attackPoints || character.attackPoints,
            healthPoints: character.healthPoints,
            interval: character.interval
        }

        res.status(200).send(characters)
    },
    deleteCharacter: (req, res) => {
        const i = characters.findIndex(character => character.id === +req.params.id)
        characters.splice(i, 1)
        res.status(200).send(characters)
    }
}