import React from "react";
import { ImgGrid } from "../../../components/grid/ImgGrid";
import { BgLayout } from "../../../components/layout/BgLayout";
import { MainHeader } from "../../../components/layout/header/MainHeader";
import { FadeIn } from 'ts-react-fade';

import  ApproveIcon from "../../../assets/chat/feed/approve-icon.svg"
import SkipIcon from "../../../assets/chat/feed/skip-icon.svg"
import { ProfileService } from "../../../networking/profiles/ProfileService";
import { BulkStylists, StylistProfile } from "../../../networking/types/ProfileTypes";
import { MatchService } from "../../../networking/matches/MatchService";


export const Feed = ({...restProps}) => {
    const [stylists, setStylists] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const [currStylist, setCurrStylist] = React.useState({
            cost: 0,
            name: "",
            _id: "",
            interests: [],
            portfolio: [],
            profile_img: "",
            age: ""
        } as unknown as StylistProfile)

    const nextStylist = () => {
        if ((index + 1) === stylists.length) {
            setIndex(0)
            setCurrStylist(stylists[0])
        } else {
            setIndex(index + 1);
            setCurrStylist(stylists[index + 1])
        }
    };

    const createMatch = async() => {
        const matchBody = {
            stylist_uid: currStylist._id
        };

        await MatchService.createMatch(matchBody).then((match) => {
            if (match != null) {
                alert('Sent a match request!')
                nextStylist();
            } else {
                alert('Something went wrong.')
            }
        })
    };

    const getStylists = async() => {
        await ProfileService.getBulkStylists().then((stylists) => {
            if (stylists.stylists !== null) {
                setStylists(stylists.stylists as any)
                setCurrStylist(stylists.stylists[index])
            }
        })

    };

    React.useEffect(() => {

        getStylists()

    }, [])

    
    return (
        <div className="feed-page-background">

            <MainHeader />
            <BgLayout title={"Your Feed"} subtitle={"Let’s match with stylists."} />

            <div style={{top: '276px', height: '500px', background: "linear-gradient(106.89deg, #E848C9 8.97%, rgba(122, 109, 255, 0.49) 47.99%, rgba(122, 109, 255, 0.49) 62.73%, #0E5E5E 87.14%)"}} className="chat-page--middle-section"></div>


            <div className="feed-container">
                <div className="feed-container-backdrop-card">

                <div style={{transform: "none"}}>

                        <div className="feed-stylist-profile"> 
                            <img className="feed-stylist-profile-image" src={currStylist.profile_img} />
                            <div className="feed-stylist-profile-clear-gradient "></div>

                            <div className="feed-stylist-profile-description-container">
                                <FadeIn delay={1000}>
                                    <p className="feed-stylist-profile-h1"> {currStylist.name} <span style={{fontSize: 12, marginLeft: 3}}> {currStylist.cost} </span> </p>
                                    <p className="feed-stylist-profile-h2"> {currStylist.age} years old </p>
                                    <p className="feed-stylist-profile-p"> {
                                        currStylist.interests.map((interest) => {
                                            return <span> </span>
                                        })
                                    } </p>
                                </FadeIn>
                            </div>

                            <div className="feed-stylist-profile-button-row">
                                <img onClick={nextStylist} style={{marginRight: 15, cursor: 'pointer'}} src={SkipIcon} />
                                <img onClick={createMatch} style={{marginRight: 15, cursor: 'pointer'}} src={ApproveIcon} />
                            </div>
                    </div>

                    <FadeIn delay={900}>

                    <div style={{padding: '15px'}}> 
                    <ImgGrid 
                        imagesURL={currStylist.portfolio} />
                    </div>
                    </FadeIn>
                </div>
                </div>
            </div>


        </div>
    )
}