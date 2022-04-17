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

    console.log(imagesURL)

    React.useEffect(() => {

        if (imagesURL != imgArr) {
            setImgArr(createGridObject(imagesURL))
        }

    }, [imagesURL])

    return (
        <>
            <Gallery photos={imgArr} />
        </>
    )
}