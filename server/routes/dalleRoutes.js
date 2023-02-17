import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
})

const openAi = new OpenAIApi(configuration)

router.route('/').get((req, res)=>{
    res.send("DALL-E Route")
})


router.route('/').post(async (req, res)=>{
    try{
        const {prompt, n ,size} = req.body

        const response = await openAi.createImage({
            prompt,
            n,
            size,
        })

        let resData = {
            data: await response.data,
            prompt: prompt
        }

        res.status(200).send(JSON.stringify(resData))

    }catch(err){
       console.log(err)
    }
})

export default router