import React from "react"
import { Modal } from 'react-bootstrap'
import { ProfileService } from "../../networking/profiles/ProfileService";
import { ImgGrid } from "../grid/ImgGrid";


export const UploadPortfolioModal = ({interests, modal, showModal, ...restProps}: any) => {
    const [imgURL, setImgURL] = React.useState(['']);
    const [rate, setRate] = React.useState(0);
    const [status, setStatus] = React.useState("");
    const [steps, setSteps] = React.useState(0);


    const uploadDetails = async() => {
        const stylistProfile = {
            cost: rate as number,
            description: status as string,
            interests: interests as Array<string>,
            portfolio: imgURL as Array<string>
        };

        await ProfileService.createStylistProfile(stylistProfile).then((profile) => {
            if (profile.profile != null) {
                alert("Successfully uploaded!")
            } else {
                alert("Something went wrong!")
            }
        })
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
        {/* <button className="finish-creating-outfit-btn" onClick={handleShow}>
            Add your Portfolio
        </button> */}

            <Modal show={modal} onHide={showModal}>
                
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
                            <p className="upload-portfolio-modal-h1"> Step 3 </p>

                            <br />

                            <div style={{marginBottom: '20px'}}>
                               <p className="upload-portfolio-modal-h1"> Add your Rate </p>
                               <p className="text-center"> This is the cost per each outfit creation. </p>

                               <div className="upload-outfit-rate-writer-row-container">
                               {// @ts-ignore: Unreachable code error
                                    <input className="calendar-input" style={{width: 234}} placeholder={"Enter the cost"} type="number" value={rate} onChange={(text) => setRate(text.target.value)} />}
                                </div>

                            </div>
                            
                            <div className="upload-portfolio-modal-btn-row">
                                <button className="cancel-btn" onClick={() => setSteps(steps - 1)}> Back </button>
                                <button className="next-button" onClick={() => setSteps(steps + 1)}> Next </button>
                            </div>
                        </div>
                     
                    : steps === 3 ? 
                    <div>
                        <p className="upload-portfolio-modal-h1"> Step 4 </p>

                        <br />

                        <div style={{marginBottom: '20px'}}>
                        <p className="upload-portfolio-modal-h1"> Add something about you! </p>
                        <p className="text-center"> Let people know what you are about </p>

                        <div className="upload-outfit-rate-writer-row-container">
                        {// @ts-ignore: Unreachable code error
                                <input className="calendar-input" style={{width: 234}} placeholder={"Enter something about you"} value={status} onChange={(text) => setStatus(text.target.value)} />}
                            </div>

                        </div>
                        
                        <div className="upload-portfolio-modal-btn-row">
                            <button className="cancel-btn" onClick={() => setSteps(steps - 1)}> Back </button>
                            <button className="next-button" onClick={() => setSteps(steps + 1)}> Next </button>
                        </div>
                    </div>
                    :
                    
                    <div>
                            <br />

                        <p className="upload-portfolio-modal-h1"> Details have been uploaded successfully! </p>

                        <br></br>
                        <br></br>

                        <div className="upload-portfolio-modal-btn-row">
                            <button className="next-button" onClick={uploadDetails}> Submit </button>
                        </div>

                    </div>}
                
                </Modal.Body>
            </Modal>

        </>
    )
}