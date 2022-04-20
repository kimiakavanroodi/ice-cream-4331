import React from "react";

export const ViewOutfitModal = ({pieces, setShow, ...restProps}: any) => {

    return (
        <div className="outfit-modal">

        <div className="outfit-modal-container">
            <div style={{justifyContent: "flex-end", alignItems: 'baseline'}} className="outfit-modal-row">
              
                <div>
                <p className="outfit-modal-exit-link" onClick={() => { setShow(false) }}> Exit</p>
                </div>
            </div>

            <div className="outfit-modal-row " style={{marginTop: '30px'}}>
                <p className="outfit-modal-h1"> View Outfit </p>
            </div>

            <hr style={{marginBottom: '30px'}} className="outfit-modal-hr" />

                    {pieces.map((piece: any, idx: number) => {
                        return (
                            <div className="outfit-modal-row" style={{marginBottom: '39px', alignItems: 'center'}}>
                                <div className="outfit-modal-column" style={{flex: 1, paddingRight: '20px'}}>
                                    <p className="outfit-modal-number"> {idx + 1} </p>
                                </div>
        
                            <div className="outfit-modal-column">
                                <div className="outfit-modal-white-card outfit-modal-row">
                                    <div className="outfit-modal-row">
        
                                    <div className="outfit-modal-column" style={{marginRight: 30}}>

                                    <div className="outfit-modal-row" style={{marginBottom: 28}}>

                                        <div className="outfit-modal-input-container" style={{marginRight: 20}}>
                                            <p className="calendar-h2"> Name  </p>
                                            <input value={piece.name} contentEditable={false} placeholder="Enter name of piece" className="calendar-input" />
                                        </div>

                                        <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Type  </p>
                                            <input value={piece.type} contentEditable={false} placeholder="Enter the type" className="calendar-input" />
                                        </div>

                                    </div>
                                    
                                    <div className="outfit-modal-row "  style={{marginBottom: 28}}>
                                    <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Notes  </p>
                                            <textarea value={piece.note} contentEditable={false} style={{height: '80px'}} placeholder="Enter notes about this item" className="calendar-input" />
                                        </div>
                                    </div>

                                    <div className="outfit-modal-row "  style={{marginBottom: 28}}>

                                    <div className="outfit-modal-input-container" style={{marginRight: 20}}>
                                            <p className="calendar-h2"> Brand </p>
                                            <input value={piece.brand} contentEditable={false} placeholder="Enter the brand" className="calendar-input" />
                                        </div>

                                        <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Price  </p>
                                            <input type="number" value={piece.cost} contentEditable={false} placeholder="Enter the cost" className="calendar-input" />
                                        </div>

                                        <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Piece Link  </p>
                                            <input value={piece.link} contentEditable={false} placeholder="Enter in link of piece" className="calendar-input" />
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
                                        <input value={piece.img_url} contentEditable={false} className="calendar-input" />
                                    </div>
                                </div>

                            </div>

                            </div>
                            </div>
                        </div>
                        )
                    })}
                   
      

            
        </div>
    </div>

    )




}