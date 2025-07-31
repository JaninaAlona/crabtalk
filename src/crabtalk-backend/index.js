import beApp from "./server.js"
import mongodb from "mongodb"
// import ReviewsDAO from "./dao/reviewsDAO.js" //////////////////////////////

// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongo_username = encodeURIComponent( process.env.DB_USER );
const mongo_password = encodeURIComponent( process.env.DB_PASSWORD );
const uri =  `mongodb+srv://${mongo_username}:${mongo_password}@crabtalkcluster.xyy9v4b.mongodb.net/?retryWrites=true&w=majority&appName=crabtalkcluster` 
const port = 8000

const client = new mongodb.MongoClient(uri, {
  serverApi: {
    version: mongodb.ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect().catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        beApp.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);