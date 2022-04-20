import React from "react";
import { OutfitService } from "../../../../networking/chat/outfits/OutfitService";
import { ViewOutfitModal } from "../modals/ViewOutfitModal";

export const OutfitMessage = ({chat_id, cost, role, id, title, price, description, has_seen, pieces, ...restProps}: any) => {
    const [seen, isSeen] = React.useState(has_seen)
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {

        if (has_seen != seen) {
            isSeen(has_seen)
        }

    }, has_seen)

    console.log(has_seen)

    const seeOutfit = async() => {
        return await OutfitService.seeOutfit(chat_id, id).then((outfit) => {
            console.log(outfit)
            alert('Viewed outfit!')
        })
    };

    const getOutfitPrice = () => {
        var total_price = 0

        for (let i = 0; i < pieces.length; i++) {
            total_price += pieces[i].cost
        }
        
        return total_price
    }

    return (
        <div className="gradient-card-outfit-row">

            <>
            {show ? 
            
                <ViewOutfitModal pieces={pieces} setShow={setShow} />
        
            :null}

            </>
            <div className="gradient-card-outfit">
                <div className="gradient-card-outfit-roww">
                    <div style={{flex: 1, alignItems: "flex-end", marginRight: '15px', alignSelf: "normal"}} className="gradient-card-outfit-column">
                        <img className={has_seen? "gradient-card-outfit-img":"gradient-card-outfit-img blur"}  src={pieces[0].img_url.toString()} />
                    </div>

                    <div className="gradient-white-top-card-outfit"></div>
                    {
                        !has_seen ? 
                            <button onClick={seeOutfit} className="payment-button"> Pay ${cost} </button>
                        : <button onClick={() => setShow(true)} className="payment-button"> View Outfit </button>
                    }
                    
                    <div style={{flex: 2, alignItems: "flex-start"}} className="gradient-card-outfit-column">
                        <p className="gradient-card-outfit-h1"> {title} </p>
                        <p className="gradient-card-outfit-cost"> ${getOutfitPrice()} outfit total cost </p>
                        <hr className="gradient-card-outfit-hr" style={{marginTop: '15px'}} />

                        <p className="gradient-card-outfit-p"> {description} </p>        

                        <p className="gradient-card-outfit-total-pieces"> {pieces.length} total pieces </p>                                
                    </div>

                    <div>
                    </div>
                </div>
            </div>
        </div> 
    )

}