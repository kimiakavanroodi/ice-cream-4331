import React from "react";



export const OutfitModal = ({setOpen} : any, {...restProps}) => {
    const [new_outfits, createOutfit] = React.useState([{

    }])
    const [tab, setTab] = React.useState("create")

    const addNewPiece = () => {

    }

    // const updatePiece = (id, key, value) => {

    // }

    return (
        <div className="outfit-modal">

            <div className="outfit-modal-container">
                <div style={{justifyContent: "space-between"}} className="outfit-modal-row">
                    <div className="outfit-modal-row ">
                        <p style={{marginRight: '57px'}} className="outfit-modal-nav-links"> Create Outfit </p>
                        <p className="outfit-modal-nav-links"> View All Outfits</p>
                    </div>
                    <div style={{display: "flex"}}>
                        <p className="outfit-modal-exit-link" onClick={() => setOpen(false)}> Exit</p>
                    </div>
                </div>

                <div className="outfit-modal-row " style={{marginTop: '30px'}}>
                    <p className="outfit-modal-h1"> Create an Outfit </p>
                </div>

                <hr style={{marginBottom: '30px'}} className="outfit-modal-hr" />

                <div className="outfit-modal-row" >
                    <div className="outfit-modal-column" style={{flex: 1}} >
                        <p className="outfit-modal-number"> 1 </p>

                    </div>

                    <div className="outfit-modal-column" >
                        <div className="outfit-modal-white-card outfit-modal-row">

                            <div className="outfit-modal-row ">
    
                                <div className="outfit-modal-column" style={{marginRight: 30}}>

                                    <div className="outfit-modal-row" style={{marginBottom: 28}}>

                                        <div className="outfit-modal-input-container" style={{marginRight: 20}}>
                                            <p className="calendar-h2"> Name  </p>
                                            <input placeholder="Enter name of piece" className="calendar-input" />
                                        </div>

                                        <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Type  </p>
                                            <input placeholder="Enter name of piece" className="calendar-input" />
                                        </div>

                                    </div>
                                    
                                    <div className="outfit-modal-row "  style={{marginBottom: 28}}>
                                    <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Notes  </p>
                                            <textarea style={{height: '80px'}} placeholder="Enter name of piece" className="calendar-input" />
                                        </div>
                                    </div>

                                    <div className="outfit-modal-row "  style={{marginBottom: 28}}>

                                    <div className="outfit-modal-input-container" style={{marginRight: 20}}>
                                            <p className="calendar-h2"> Brand </p>
                                            <input placeholder="Enter name of piece" className="calendar-input" />
                                        </div>

                                        <div className="outfit-modal-input-container">
                                            <p className="calendar-h2"> Price  </p>
                                            <input placeholder="Enter name of piece" className="calendar-input" />
                                        </div>

                                    </div>
                                </div>

                              

                            </div>
                            <div className="outfit-modal-column" style={{flex: 1}}>

                                <div className="outfit-modal-row ">
                                    <img className="outfit-modal-img" src="data:image/jpeg;base64,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" />

                                </div>

                                <div style={{marginTop: 18}} className="outfit-modal-row ">
                                    <div className="outfit-modal-input-container" style={{marginRight: 0}}>
                                        <p className="calendar-h2"> Piece Link  </p>
                                        <input placeholder="Enter name of piece" className="calendar-input" />
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

                <div>

                    Add + 
                        
                </div>
                    
                <div>
                        
                </div>

            </div>




        </div>
    )
}