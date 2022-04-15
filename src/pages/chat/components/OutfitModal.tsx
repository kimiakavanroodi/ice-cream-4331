import React from "react";



export const OutfitModal = ({setOpen} : any, {...restProps}) => {
    const [new_outfits, createOutfit] = React.useState([])
    const [tab, setTab] = React.useState("create")

    return (
        <div className="outfit-modal">

            <div className="outfit-modal-container">
                <div style={{justifyContent: "space-between"}} className="outfit-modal-row">
                    <div className="outfit-modal-row ">
                        <p style={{marginRight: '57px'}} className="outfit-modal-nav-links"> Create Outfit </p>
                        <p className="outfit-modal-nav-links"> View All Outfits</p>
                    </div>
                    <div>
                        <p className="outfit-modal-exit-link" onClick={() => setOpen(false)}> X Exit</p>
                    </div>
                </div>

                <div className="outfit-modal-row " style={{marginTop: '30px'}}>
                    <p className="outfit-modal-h1"> Create an Outfit </p>
                </div>

                <hr className="outfit-modal-hr" />

                <div>
                    <div>

                    </div>

                    <div>
                        <div>
                        

                        </div>


                    </div>

                </div>

                <div>
                        
                </div>
                    
                <div>
                        
                </div>

            </div>




        </div>
    )
}