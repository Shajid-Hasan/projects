const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://smartDB:CMOsbzx6FzE8xZsO@cluster0.ddzxozm.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


app.get('/', (req, res) => {
    res.send('Smart server is running !')
})

async function run() {
    try {
        await client.connect();

        const db = client.db('smart_db');
        const productsCollection = db.collection('products');
        const bidsCollection = db.collection('bids');
        const usersCollection = db.collection('users');

        app.post('/users', async (req, res) => {
            const newUser = req.body
            const result = await usersCollection.insertOne(newUser)
            res.send(result)
        })



        // FIND ALL & DISPLAY ALL
        app.get('/products', async (req, res) => {

            // SERCH BY EMAIL
            console.log(req.query)
            const email = req.query.email;
            const query = {}
            if (email) {
                query.email = email
            }
            const cursor = productsCollection.find(query).sort({ price_min: -1 });
            const result = await cursor.toArray();
            res.send(result)
        })

        // FIND ONE & DISPLAY ONE
        app.get('/products/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await productsCollection.findOne(query)
            res.send(result)
        })

        app.get('/latest-products', async(req, res) => {
            const cursor = productsCollection.find().sort({created_at: -1}).limit(6);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/bids/byProduct/:productID',)

        // POST MONGO-DB
        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            const result = await productsCollection.insertOne(newProduct)
            res.send(result)
        })

        // DELETE MONGO-DB
        app.delete('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await productsCollection.deleteOne(query)
            res.send(result)
        })

        // UPDATE MONGO-DB
        app.patch('/products/:id', async (req, res) => {
            const id = req.params.id
            const updatedProduct = req.body;
            const query = { _id: new ObjectId(id) }
            const update = {
                $set: {
                    name: updatedProduct.name,
                    price: updatedProduct.price
                }
            }
            const result = await productsCollection.updateOne(query, update)
            res.send(result)
        })

        // BIDS RELETED API
        // FIND ALL BIDS
        app.get('/bids', async (req, res) => {
            console.log(req.query)
            const email = req.query.email
            const query = {}
            if (email) {
                query.buyer_email = email
            }
            const cursor = bidsCollection.find(query)
            const result = await cursor.toArray()
            res.send(result)
        })

        // FIND ONE BID
        app.get('/bids/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: (id) }
            const result = await bidsCollection.findOne(query)
            res.send(result)
        })

        // BIDS PRODUCT ID
        app.get('/products/bids/:productID', async(req, res) => {
            const productId = req.params.productID;
            const query = { product: productId }
            const cursor = bidsCollection.find(query).sort({bid_price: -1})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/bids', async (req, res) => {
            const query = {};
            if(query.email){
                query.buyer_email =email;
            }
            const cursor = bidsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        // INSERT ONE BID
        app.post('/bids', async (req, res) => {
            const newBid = req.body;
            const result = await bidsCollection.insertOne(newBid)
            res.send(result)
        })

        // BID DELETE
        app.delete('/bids/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await bidsCollection.deleteOne(query)
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Smart server is running now on port ${port}`)
})

// client.connect()
//     .then(() => {
//         app.listen(port, () => {
//             console.log(`Smart server is running now on port ${port}`)
//         })
//     })
//     .catch(console.dir);