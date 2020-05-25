const mongoose = require("mongoose") ;

const tarefaSchema = new mongoose.Schema({
    nome : { 
        type : String ,
        required : "Name cannot be blank"
    } , 

    dataDeCriacao : { 
        type : Date ,
        default : Date.now
    },

    status : { 
        type : [{
            type: String,
            enum: ["pendente", "em andamento", "completa"]
          }] ,
        default : "pendente" 
    } 

})
const Tarefa = mongoose.model("Tarefa" , tarefaSchema) ;

module.exports = Tarefa ; 