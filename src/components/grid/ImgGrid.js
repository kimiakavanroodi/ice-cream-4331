import React from "react"
import Gallery from 'react-photo-gallery';


const createGridObject = (imageURLs) => {
    const gridObj = imageURLs.map((url, idx) => { 
        return { src: url, height: 1, width: 1  }
    });
    return gridObj;
}

export const ImgGrid =({imagesURL, ...restProps}) => {
    const [imgArr, setImgArr] = React.useState(createGridObject(imagesURL));

    React.useEffect(() => {

        if (imagesURL !== imgArr) {
            createGridObject(imagesURL)
        }

    }, [])

    return (
        <>
            <Gallery photos={imgArr} />
        </>
    )
}