const fastify = require('fastify')({ logger: true });
const path = require('path');
const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017/computer_labs?directConnection=true&serverSelectionTimeoutMS=2000&appName=computerLabs)")

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist'),
  prefix: '/', // optional: default '/'
});

fastify.get('/api/products', async function (req, reply) {
    const db = client.db("computer_labs");
    const product = db.collection("product");
  return reply.send(await product.find({}).toArray());
});

// Run the server!
const start = async () => {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()