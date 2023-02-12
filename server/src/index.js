const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//request to OpenAI API

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);


// defining the Express app
const app = express();

app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// app.use('/imagedata', async(req, res, next) => {
//   let response = await JSON.stringify(openAIRes()) 
//   res.end(response)
//   next()
// })

app.get('/', (req, res)=>{
  res.send("Hello World! The Server is ready")
})

// defining an post endpoint to return image data 
app.post('/imagedata', async (req, res) => {
  const response = await openai.createImage({
    prompt: req.body.prompt,
    n: req.body.n,
    size: req.body.size,
  });

  const imageData = response.data

  res.send(imageData)
});

// starting the server
app.listen(8000, () => {
  console.log('listening on port 8000');
});