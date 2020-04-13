var Sequelize = require('sequalize')

var character = sequelize.define("starwars," {
    name: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    age: {
        Sequelize.INTEGER,
    },
    forcePoints: {
        Sequelize.INTEGER
    }


})
characters.sync





// {
//     vader = {
//         name: "Darth Vader",
//         role: "Sith guy?",
//         age: 62,
//         forcepoints: 2000
//     },
//     yoda = {
//         name: "Yoda",
//         role: "Jedi Master",
//         age: 200,
//         forcepoints: 3300
//     }
// }
modules.export = characters