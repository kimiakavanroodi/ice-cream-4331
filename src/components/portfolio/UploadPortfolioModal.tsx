import React from "react"
import { Modal } from 'react-bootstrap'
import { ImgGrid } from "../grid/ImgGrid";

export const UploadPortfolioModal = ({...restProps}) => {
    const [show, setShow] = React.useState(false);
    const [imgURL, setImgURL] = React.useState(['']);
    const [steps, setSteps] = React.useState(0);

    const handleClose = () => { 
        setShow(false);
        setSteps(0);
        setImgURL([""]);
    };

    const handleShow = () => { 
        setShow(true)
    };

    const addImageURL = () => {
        setImgURL([...imgURL, ""])
    };

    const updateImageURL = (id: number, text: string) => {
        const copyArr = [...imgURL];
        copyArr[id] = text;
        setImgURL(copyArr);
    };

    const deleteImageURL = (id: number) => {
        const deletedImg = imgURL.filter((val, idx, arr) => idx !== id);
        setImgURL(deletedImg);
    };

    return (
        <>
        <button className="finish-creating-outfit-btn" onClick={handleShow}>
            Add your Portfolio
        </button>

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Body>

                    {steps === 0? 
                       <div>
                            <div style={{marginBottom: '20px'}}>
                               <p className="upload-portfolio-modal-h1"> Step 1 </p>
                            </div>

                           {imgURL.map((url, idx) => {
                               return (
                                    <div className="upload-portfolio-modal-row" style={{marginBottom: 20}}>
                                        <span style={{marginRight: 10}}> {idx + 1} </span> 
                                        <input className="calendar-input" placeholder={"Enter the image URL"} value={url} onChange={(text) => updateImageURL(idx, text.target.value)} />
                                        <span className="upload-portfolio-modal-delete" style={{marginLeft: '10px'}} onClick={() => deleteImageURL(idx)}> X </span>
                                    </div>
                                )})}

                           <br></br>

                           <div className="upload-portfolio-modal-row">
                               <button className="upload-portfolio-modal-add-btn" onClick={addImageURL}>  + </button>
                           </div>

                           <br></br>

                           <div style={{marginBottom: '20px'}} className="upload-portfolio-modal-btn-row">
                               <button className="cancel-btn" onClick={handleClose}> Cancel </button>
                               <button className="next-button" onClick={() => setSteps(steps + 1)}> Next </button>
                           </div>

                       </div>

                    : steps === 1? 
                        <div>
                            <div>
                               <p className="upload-portfolio-modal-h1"> Step 2 </p>
                            </div>

                            <br></br>

                            <div style={{height: '400px', overflowY: 'auto'}}>
                                <ImgGrid imagesURL={imgURL} />
                            </div>

                            <br></br>

                            <div className="upload-portfolio-modal-btn-row">
                                <button className="cancel-btn" onClick={() => setSteps(steps - 1)}> Back </button>
                                <button className="next-button" onClick={() => setSteps(steps + 1)}> Next </button>
                            </div>

                        </div>
                    : steps === 2?
                        <div>

                            <p className="upload-portfolio-modal-h1"> You uploaded your portfolio successfully! </p>

                            <br></br>
                            <br></br>

                            <div className="upload-portfolio-modal-btn-row">
                                <button className="next-button" onClick={handleClose}> Submit </button>
                            </div>

                        </div>
                    :null}
                
                </Modal.Body>
            </Modal>

        </>
    )
}