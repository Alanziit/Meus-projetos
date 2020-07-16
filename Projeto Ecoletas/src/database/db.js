//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()
//iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


//utilizar o objeto de banco de dados ,para nossa operação

// db.serialize(() => {
    //criar uma tabela com comandos SQL
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    //inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `
// const values =[
//         "http://localhost:3001/icones/papelao-part2.jpg",
//         "Papersider",
//         "Guilherme comballa,Jardim America",
//         "numero 260",
//         "Santa catarina",
//         "Rio do sul",
//         "Resíduos eletrônicos,Lampadas"
// ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log('cadastrado com sucesso')
//         console.log(this)
//     }

//     db.run(query,values,afterInsertData )
       
    
    //consultar os dados da tabela
    // db.all(`SELECT * FROM places`,function(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log('Aqui estao seus registros')
    //     console.log(rows)
    // })

    //deletar dados da tabela
    // db.run(`DELETE FROM places WHERE id = ?`,[3],function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log('registro deletado com sucesso')
    // })
// })