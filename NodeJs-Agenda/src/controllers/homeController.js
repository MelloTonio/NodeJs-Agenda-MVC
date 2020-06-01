
const Contato = require('../models/ContatoModel')


exports.index = async (req, res) => {
  let contatos = await Contato.buscaContatos()
  let perPage = 5
  let contacts = []
  let page = req.params.page || 1
  let count = 0
  for(let i of contatos){
    count += 1
  }
  comprimento = contatos.length / 5
  contatos = contatos.slice(0,5)
  res.render('index', {contatos,contador:count,comprimento});
  return;
};

exports.pagination = async (req,res) =>{
  let contatos = await Contato.buscaContatos()
  let contacts = []
  let perPage = 5
  let page = req.params.id
  if(parseInt(page)){
  let max = ((perPage * parseInt(page)))
  let min = (max - 5)
  if(page == '1'){
    min = 0
    max = 5
  }
  let count = 0
  for(let i of contatos){
    count += 1
    contacts.push(i)
  }
  contatos = contacts
  comprimento = contatos.length / 5
  contatos = contatos.slice(min,max)
  res.render('index', {contatos,contador:count,comprimento});
  return;
} 
} 


