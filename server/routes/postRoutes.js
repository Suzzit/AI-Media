import express from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from "../mongodb/models/post.js"

dotenv.config();

const router = express.Router();

router.route("/", async (req, res)=>{
    console.log(req.message)
})
export default router