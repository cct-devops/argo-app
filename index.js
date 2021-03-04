const fastify = require('fastify')({logger: true})

fastify.get('/test', async function (req, res) {
  return {hello: "world"}
})

fastify.get('/spanish', async function (req, res) {
  return {hola: "mundo"}
})

fastify.listen(3000, '0.0.0.0')
