import React from "react";
import { Modal, Button } from "react-bootstrap"
import { OutfitService } from "../../../../networking/chat/outfits/OutfitService";


export const SubmitOutfitModal = ({chat_id, pieces, setPieces}: any) => {
    const [title, setTitle] = React.useState("");
    const [description, setDesc] = React.useState("");

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitOutfit = async() => {
      const outfitBody = {
        title: title,
        description: description,
        pieces: pieces
      }

      return await OutfitService.createOutfit(chat_id, outfitBody).then((outfit) => {
        console.log(outfit)
        alert("Successfully created the outfit!")
        handleClose()
      })

    };
    
    return (
        <>
        <button className="finish-creating-outfit-btn" onClick={handleShow}>
          Finish Creating Outfit
        </button>
  
        <Modal show={show} onHide={handleClose}>
        
          <Modal.Body>
              <div className="outfit-modal-submission-modal">
                <p className="calendar-h2" style={{fontSize: '15px', textAlign: 'center', marginBottom: '20px'}}>What do you name this outfit?</p>
                <input value={title} onChange={(text) => setTitle(text.target.value)} placeholder="Enter the name of this outfit" className="calendar-input" />

                <br />
                <br />

                <p className="calendar-h2" style={{fontSize: '15px', textAlign: 'center', marginBottom: '20px'}}>List a summary for it.</p>
                <textarea style={{minHeight: '86px'}} value={description} onChange={(text) => setDesc(text.target.value)} placeholder="Enter the name of this outfit" className="calendar-input" />
              </div>

              <div className="outfit-modal-submission-modal-row">
                <button className="outfit-modal-submission-cancel-button" onClick={handleClose}>
                    Cancel
                </button>

                <button className="outfit-modal-submission-btn" onClick={submitOutfit}>
                    Submit
                </button>
            </div>
          </Modal.Body>
        
        </Modal>
      </>
    )

}