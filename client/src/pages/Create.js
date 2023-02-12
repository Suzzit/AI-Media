import React from 'react'
import PromptFields from '../components/Promptfields'

const { useState } = React

const Create = () => {
    /* Roadmap of this page
   1: getImageData() gets fetched data from PromptSearch
   2: Data is set to state: imageData which is rendered accordingly
    */
    const [imageData, setImageData] = useState(null) //gets image data from fetching
    function getImageData(imageData) {
        setImageData(imageData.data)
    }


    return (
        <main className='create-page-main'>

            <PromptFields giveImageData={getImageData} />

            <div className='create-page-main__showcase'>
                <h1>Generates images using OpenAi API</h1>
                {
                    (imageData != null) ?
                        <div className='create-page-main__showcase__images-grid'>
                            {
                                imageData.map((elem, index) => {
                                    return <img src={elem.url} key={index} />
                                })
                            }
                        </div>
                        :
                        <h2>Please search for something</h2>
                }
            </div>
        </main>
    )
}

export default Create