//external packages 
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

//mongoDB
import connectDB from './mongodb/connect.js'

//routes
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

//initialize the express app
const app = express()
 
//middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//routing
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
  res.send('Hello world')
})

const startServer = async () => {

  try {
    connectDB(process.env.MONGODB_URL)
  } catch (err) {
    console.log(err)
  }

  app.listen(8080, () => {
    console.log("the server has started");
  })
}

startServer()
