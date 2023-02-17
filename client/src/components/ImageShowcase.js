import React from 'react'
import { useParams } from 'react-router-dom'

const ImageShowcase = (props) => {
    let {url} = useParams()
  return (
    <h1>
        Image showcase 
        {console.log(props.imageUrls)}
        {url}
    </h1>
  )
}

export default ImageShowcase