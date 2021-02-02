const characters = []

let id = 1

module.exports = {
    readCharacters: (req, res) => {
        res.status(200).send(characters)
    },
    addCharacter: (req, res) => {
        const {name, attackPoints} = req.body
        const newCharacter = {id, name, attackPoints, healthPoints: 0}
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
            healthPoints: character.healthPoints
        }

        res.status(200).send(characters)
    },
    deleteCharacter: (req, res) => {
        const i = characters.findIndex(character => character.id === +req.params.id)
        characters.splice(i, 1)
        res.status(200).send(characters)
    }
}