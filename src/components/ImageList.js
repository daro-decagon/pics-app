import './ImageList.css'
import React from 'react';


const ImageList = props => {
    console.log(props.images);

    const images = props.images.map(({id, urls, description})=>{
        return <img key={id} src ={urls.small} alt = {description}/>
    });

    return <div>{images}</div>
}

export default ImageList; 