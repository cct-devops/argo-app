const fastify = require('fastify')({logger: true})

fastify.get('/test', async function (req, res) {
  return {hello: "world"}
})


fastify.listen(3000, '0.0.0.0')
