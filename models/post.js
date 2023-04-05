const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos" , {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.SMALLINT
    },
    origem:{
        type: db.Sequelize.SMALLINT
    },
    data: {
        type: db.Sequelize.STRING
    },
    observacao: {
        type: db.Sequelize.STRING
    },
})
// Agendamentos.sync()

console.log(Agendamentos);

module.exports = Agendamentos