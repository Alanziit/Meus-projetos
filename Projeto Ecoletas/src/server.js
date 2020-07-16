const express = require("express")
const server = express()

//pegar o banco de dados

const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})



//configurar caminhos ,pagina inicial
//req:requisição
//res:respostas

server.get("/", (req, res) => {
  return res.render("index.html", { title: "vai papai" })
})
server.get("/form-cadastro", (req, res) => {

  //re.query: Query string da nossa url
  console.log(req.query)


  return res.render("form-cadastro.html")
})
server.get("/search-results", (req, res) => {
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length
    //mostrar a pagina html com os dados do banco de dados
    return res.render("search-results.html", { places: rows ,total:total})
  })
})



//ligar o servidor
server.listen(3001)