import React from "react";
import AddOutfitPiece from '../../../assets/chat/add-outfit-icon.svg'
import { SubmitOutfitModal } from "./SubmitOutfitModal";

interface outfit_piece {
    name: "";
    type: "";
    note: "";
    brand: "";
    cost: "";
    link: "";
}

export interface outfit_pieces extends Array<outfit_piece>{}


export const OutfitModal = ({setOpen} : any, {...restProps}) => {
    const [new_outfits, createOutfit] = React.useState([{
        name: "", type: "", note: "", brand: "", cost: "", img_url: "", link: ""
    }])
    const [tab, setTab] = React.useState("create")

    const addNewPiece = () => {
        const new_piece = [...new_outfits];
        new_piece.push({
            name: "", type: "", note: "", brand: "", cost: "", img_url: "", link: ""
        })
        createOutfit(new_piece)
    };

    const deletePiece = (id: number) => {
        const new_piece = [...new_outfits];
        const updated_pieces = new_piece.filter((val, idx, arr) => idx !== id);
        createOutfit(updated_pieces);
    };

    const updatePiece = (id: number, key: string, value: string) => {
        const updated_piece = [...new_outfits];
        updated_piece[id][key as keyof outfit_piece] = value;
        createOutfit(updated_piece);
    };

    console.log(new_outfits)

    return (
        <div className="outfit-modal">

            <div className="outfit-modal-container">
                <div style={{justifyContent: "space-between", alignItems: 'baseline'}} className="outfit-modal-row">
                    <div className="outfit-modal-row">
                        <p style={{marginRight: '57px'}} className="outfit-modal-nav-links"> Create Outfit </p>
                        <p className="outfit-modal-nav-links"> View All Outfits</p>
                    </div>
                    <div>
                    <p className="outfit-modal-exit-link" onClick={() => setOpen(false)}> Exit</p>
                    </div>
                </div>

                <div className="outfit-modal-row " style={{marginTop: '30px'}}>
                    <p className="outfit-modal-h1"> Create an Outfit </p>
                </div>

                <hr style={{marginBottom: '30px'}} className="outfit-modal-hr" />

                        {new_outfits.map((piece, idx) => {
                            return (
                                <div className="outfit-modal-row" style={{marginBottom: '39px', alignItems: 'center'}}>
                                    <div className="outfit-modal-column" style={{flex: 1, paddingRight: '20px'}}>
                                        <p className="outfit-modal-number"> {idx + 1} </p>
                                        <p onClick={() => deletePiece(idx)} className="outfit-modal-delete-icon"> X </p>
                                    </div>
            
                                <div className="outfit-modal-column">
                                    <div className="outfit-modal-white-card outfit-modal-row">
                                        <div className="outfit-modal-row">
            
                                        <div className="outfit-modal-column" style={{marginRight: 30}}>
    
                                        <div className="outfit-modal-row" style={{marginBottom: 28}}>
    
                                            <div className="outfit-modal-input-container" style={{marginRight: 20}}>
                                                <p className="calendar-h2"> Name  </p>
                                                <input value={piece.name} onChange={(text) => updatePiece(idx, "name", text.target.value)} placeholder="Enter name of piece" className="calendar-input" />
                                            </div>
    
                                            <div className="outfit-modal-input-container">
                                                <p className="calendar-h2"> Type  </p>
                                                <input value={piece.type} onChange={(text) => updatePiece(idx, "type", text.target.value)} placeholder="Enter the type" className="calendar-input" />
                                            </div>
    
                                        </div>
                                        
                                        <div className="outfit-modal-row "  style={{marginBottom: 28}}>
                                        <div className="outfit-modal-input-container">
                                                <p className="calendar-h2"> Notes  </p>
                                                <textarea value={piece.note} onChange={(text) => updatePiece(idx, "note", text.target.value)} style={{height: '80px'}} placeholder="Enter notes about this item" className="calendar-input" />
                                            </div>
                                        </div>
    
                                        <div className="outfit-modal-row "  style={{marginBottom: 28}}>
    
                                        <div className="outfit-modal-input-container" style={{marginRight: 20}}>
                                                <p className="calendar-h2"> Brand </p>
                                                <input value={piece.brand} onChange={(text) => updatePiece(idx, "brand", text.target.value)} placeholder="Enter the brand" className="calendar-input" />
                                            </div>
    
                                            <div className="outfit-modal-input-container">
                                                <p className="calendar-h2"> Price  </p>
                                                <input value={piece.cost} onChange={(text) => updatePiece(idx, "cost", text.target.value)} placeholder="Enter the cost" className="calendar-input" />
                                            </div>

                                            <div className="outfit-modal-input-container">
                                                <p className="calendar-h2"> Piece Link  </p>
                                                <input value={piece.link} onChange={(text) => updatePiece(idx, "link", text.target.value)} placeholder="Enter in link of piece" className="calendar-input" />
                                            </div>
    
                                        </div>
                                    </div>
                                </div>

                                <div className="outfit-modal-column" style={{flex: 1}}>
    
                                    <div className="outfit-modal-row ">
                                        <img className="outfit-modal-img" src={piece.img_url} />
    
                                    </div>
    
                                    <div style={{marginTop: 18}} className="outfit-modal-row ">
                                        <div className="outfit-modal-input-container" style={{marginRight: 0}}>
                                            <p className="calendar-h2"> Image URL </p>
                                            <input value={piece.img_url} onChange={(text) => updatePiece(idx, "img_url", text.target.value)}  placeholder="Enter the URL of photo" className="calendar-input" />
                                        </div>
                                    </div>
    
                                </div>
    
                                </div>
                                </div>
                            </div>
                            )
                        })}
                       

                <div className="outfit-modal-row" style={{justifyContent: "center"}}>
                    <img onClick={addNewPiece} className="outfit-piece-icon" src={AddOutfitPiece} />                  
                </div>

                <div className="outfit-modal-column" style={{justifyContent: "flex-end", alignItems: "flex-end"}}>
                    <SubmitOutfitModal pieces={new_outfits} setPieces={createOutfit} />
                    <p className="outfit-modal-num-pieces"> {new_outfits.length} total pieces </p>
                </div>
            </div>
        </div>
    )
}