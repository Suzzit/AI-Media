import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import PromptFields from '../components/Promptfields'
import axios from 'axios'

const { useState } = React

const Create = () => {
    /* Roadmap of this page
   1: getImageData() gets fetched data from PromptSearch
   2: Data is set to state: imageData which is rendered accordingly
    */
    const [imageData, setImageData] = useState(null) //gets image data from fetching
    function getImageData(imageData) {
        setImageData({
            urls: imageData.data.data,
            userPrompt: imageData.prompt
        })
        console.log(imageData.data.data[0])
    }

    const shareHandle = (e)=>{
        e.preventDefault()
        axios.post('https://localhost:8080/api/v1/post', {
            message: "hello world"
        })
    }


    return (
        <main className='create-page-main'>

            <PromptFields giveImageData={getImageData} />

            <div className='create-page-main__showcase'>
                {
                    (imageData != null) ?
                        <div className='create-page-main__showcase__images-grid'>
                            <Outlet imageUrls={imageData.urls} />
                            <h1>Showing results for {imageData.userPrompt}</h1>
                            {
                                imageData.urls.map((elem, index) => {
                                    return <NavLink to={`/create/imageshowcase/${index}`} key={index} ><img src={elem.url}/> </NavLink>
                                })
                            }
                        </div>
                        :
                        <>
                            <h1>Generates images using OpenAi</h1>
                            <h2>Please search for something</h2>
                        </>
                }
            </div>
        </main>
    )
}

export default Create