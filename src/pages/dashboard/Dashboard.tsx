import React from "react";
import '../../styles/dashboard.css'
import { MainHeader } from "../../components/layout/header/MainHeader"
import { BgLayout } from "../../components/layout/BgLayout"
import MoreIcon from "../../assets/dashboard/ellipses.svg"
import { MatchService } from "../../networking/matches/MatchService";
import { toast } from 'react-toastify'


export const Dashboard = ({...restProps}: any) => {
    const [matches, setMatches] = React.useState([])

    const submitMatch = async(match_id: string) => {
        return await MatchService.approveMatch(match_id).then((match) => {
            if (match != null) {
                toast.dark('Approved the match! Chat has opened with them.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    }

    const getAllMatches = async() => {
    //@ts-ignore: Unreachable code error
        return await MatchService.getAllMatches().then((matches) => {
            if (matches != null) {
                //@ts-ignore: Unreachable code error
                setMatches(matches)
            }
        })
    };

    React.useEffect(() => {

        getAllMatches();

    }, [])

    console.log(matches)

    return (
        <div className="feed-page-background">

            <MainHeader />

            <div style={{top: '276px', height: '500px'}} className="chat-page--middle-section"></div>

            <BgLayout title="Activity" subtitle="Let’s look at your over feed." />


            <div className="feed-container">


                <div className="dashboard-text-container">
                    <div className="bodyText">
                        All Matches
                    </div>
                
                </div>

                <div className="dashboard-section-1">

                    <div className="dashboard-section-1-gray-backdrop-card">

                        <div className="dashboard-section-1-gradient-card-row">
                    
                        {matches.map((match, idx) => {
                            var backgroundPick = ''

                            if (idx % 2 === 0) {
                                backgroundPick = 'radial-gradient(102.73% 86.56% at 9.7% 8.59%, #4ADEF2 5.73%, #3F70EE 43.12%, #A248E8 66.73%, #EC5A7B 97.92%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF'

                            } else if (idx % 3 === 0) {
                                backgroundPick = 'radial-gradient(86.93% 93.25% at 76.36% 96.25%, #FBAB33 0%, #A64AF2 21%, #3FD9EE 48.87%, #FF4EC3 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF'

                            } else if (idx % 4 === 0) {
                                backgroundPick = ' radial-gradient(83.71% 86.71% at 9.7% 8.59%, #A64AF2 5.73%, #BA3FEE 43.12%, #E848C9 66.73%, #ECA05A 97.92%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF;'
                            }

                                return (
                                    <div style={{background: backgroundPick}} className="dashboard-rainbow-card">

                                    <div className="dashboard-transparent-overlay-triangles_bottom"> </div>

                                    <div className="dashboard-transparent-overlay-triangles_top"></div>

                                    <div className="dashboard-rainbow-card-black-banner">
                                
                                        <div className="dashboard-rainbow-card-black-banner-container">

                                            { //@ts-ignore: Unreachable code error
                                            <button onClick={() => submitMatch(match._id)} className="dashboard-rainbow-card-approve-btn"> Approve </button>}
                                            <button className="dashboard-rainbow-card-decline-btn">  X </button>

                                        </div>
                                    </div>

                             
                                    <div className="dashboard-rainbow-card-expand-btn">
                                        <img src={MoreIcon} />
                                    </div>
                                    
                                    <div className="style-seeker-profile-container">
                                        <div className="style-seeker-profile-pic">
                                            <div className="style-seeker-img-container">
                                                <img style={{height: 35, borderRadius: '100%', width: 35}} src={match.style_seeker_profile.profile_img} />   
                                            </div>
                                        </div>
                                        <div className="style-seeker-name">
                                        { //@ts-ignore: Unreachable code error
                                            match.style_seeker_profile.name}
                                        </div>
                                    
                                    </div>
                                    

                                </div>
                                )

                                
                            })}
                    </div>

                    </div>
                  

                </div>
                

                </div>


                <br />
             


            </div>

        
    )

};