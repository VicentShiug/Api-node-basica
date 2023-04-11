const express = require('express');
const { randomUUID } = require('crypto')

const app = express()

app.use(express.json())

const products = []

app.post('/products', (request, response) => {
  const { name, price } = request.body

  const product = {
    name,
    price,
    id: randomUUID()
  }
  products.push(product)

  return response.json(product)

})

app.get('/products', (request, responste) => {
  return responste.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === id)
  return res.json(product)

})

app.put('/products/:id', (req, res) => {
  const { id } = req.params
  const { name, price } = req.body

  const productIndex = products.findIndex(product => product.id === id)
  products[productIndex] = {
    ...products[productIndex],
    name,
    price
  }

  return res.json({ message: 'Produto alterado com sucesso' })
})

app.delete('/products/:id', (req, res) => {
  const { id } = req.params
  const productIndex = products.findIndex(product => product.id === id)
  products.splice(productIndex, 1)
  return res.json({ message: 'Produto removido com sucesso' })
})

app.listen(3332, () => console.log('Server ta na porta 3332'))

