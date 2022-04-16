import React from "react";
import { Modal } from "react-bootstrap"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export type Focused = "name" | "number" | "expiry" | "cvc";

export const CardUploadModal = ({...restProps}: any) => {
    const [card_object, setCardInfo] = React.useState({
        number: "", cvc: "", name: "", expiry: ""
    })
    const [focus, setFocus] = React.useState("");
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const handleInputFocus = (e: any) => {
        setFocus(e.target.name);
    };
    
    const handleInputChange = (e: any) => {
        setCardInfo({
            ...card_object, 
            [e.target.name]: e.target.value
        });
    };

    console.log(card_object)

    return (
        <>
         <button className="finish-creating-outfit-btn" onClick={handleShow}>
            Finish Creating Outfit
        </button>

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Body>
                    <h1 className="add-your-card-h1"> Add your Card </h1>
                    <div className="outfit-modal-submission-modal" style={{paddingTop: 0}}>
                        <div className="wallet-container-row" style={{justifyContent: "center"}}>
                            <div style={{justifyContent: "center", paddingTop: '0px'}} className="wallet-container-column">
                                <Cards
                                    cvc={card_object.cvc}
                                    expiry={card_object.expiry}
                                    focused={focus as Focused}
                                    name={card_object.name}
                                    number={card_object.number}
                                 />
                            </div>
                        </div>
                        <br></br>
                        <div className="wallet-container-column">
                                <input 
                                    type="number"
                                    name="cvc"
                                    placeholder="CVC"
                                    className="calendar-input"
                                    style={{marginBottom: '15px'}}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                                <input 
                                    type="date"
                                    name="expiry"
                                    className="calendar-input"
                                    placeholder="Expire Date"
                                    style={{marginBottom: '15px'}}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                                <input 
                                    type="text"
                                    name="name"
                                    className="calendar-input"
                                    placeholder="Your name"
                                    style={{marginBottom: '15px'}}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                                <input 
                                    type="number"
                                    className="calendar-input"
                                    name="number"
                                    style={{marginBottom: '15px'}}
                                    placeholder="Card Number"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>

                            <br></br>

                            <div className="outfit-modal-submission-modal-row">
                                <button className="outfit-modal-submission-cancel-button" onClick={handleClose}>
                                    Cancel
                                </button>

                                <button className="outfit-modal-submission-btn" onClick={handleClose}>
                                    Add Card
                                </button>
                            </div>
                    </div>
                </Modal.Body>
            
            </Modal>

        </>

    )
}