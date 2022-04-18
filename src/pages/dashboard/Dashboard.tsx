import React from "react";
import '../../styles/dashboard.css'
import { MainHeader } from "../../components/layout/header/MainHeader"
import { BgLayout } from "../../components/layout/BgLayout"
import { ImgGrid } from "../../components/grid/ImgGrid"
import MoreIcon from "../../assets/dashboard/ellipses.svg"
import ProfileImg from "../../assets/dashboard/profileimg.svg"
import CheckCircle from "../../assets/dashboard/check_circle.svg"


export const Dashboard = ({...restProps}: any) => {

    return (
        <div className="feed-page-background">

            <MainHeader />

            <BgLayout title="Activity" subtitle="Let’s look at your over feed." />

            <div className="feed-container">

            <div className="dashboard-section-1">

                <div className="dashboard-section-1-gray-backdrop-card">

                    <div className="dashboard-section-1-gradient-card-row">

                        <div className="dashboard-rainbow-card">

                            <div className="dashboard-transparent-overlay-triangles_bottom"> </div>

                            <div className="dashboard-transparent-overlay-triangles_top"></div>

                            <div className="dashboard-rainbow-card-black-banner">
                           
                            <div className="dashboard-rainbow-card-black-banner-container">

                                <button className="dashboard-rainbow-card-approve-btn"> Approve </button>
                                <button className="dashboard-rainbow-card-decline-btn">  X </button>

                            </div>

                            </div>
                            <div className="dashboard-rainbow-card-expand-btn">
                                <img src={MoreIcon} />
                            </div>

                        </div>

                    <div className="dashboard-rainbow-card" style={{background: 'radial-gradient(102.73% 86.56% at 9.7% 8.59%, #4ADEF2 5.73%, #3F70EE 43.12%, #A248E8 66.73%, #EC5A7B 97.92%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF'}}>

                        <div className="dashboard-transparent-overlay-triangles_bottom"> </div>

                        <div className="dashboard-transparent-overlay-triangles_top"></div>

                        <div className="dashboard-rainbow-card-black-banner">
                            <div className="dashboard-rainbow-card-black-banner-container">

                                <button className="dashboard-rainbow-card-approve-btn"> Approve </button>
                                <button className="dashboard-rainbow-card-decline-btn">  X </button>

                            </div>

                        </div>
                        <div className="dashboard-rainbow-card-expand-btn">
                            <img src={MoreIcon} />
                        </div>


                    </div>


                    <div className="dashboard-rainbow-card" style={{background: 'radial-gradient(86.93% 93.25% at 76.36% 96.25%, #FBAB33 0%, #A64AF2 21%, #3FD9EE 48.87%, #FF4EC3 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF'}}>

                        <div className="dashboard-transparent-overlay-triangles_bottom"> </div>

                        <div className="dashboard-transparent-overlay-triangles_top"></div>

                        <div className="dashboard-rainbow-card-black-banner">
                           <div className="dashboard-rainbow-card-black-banner-container">

                               <button className="dashboard-rainbow-card-approve-btn"> Approve </button>
                               <button className="dashboard-rainbow-card-decline-btn">  X </button>

                            </div>

                        </div>
                        <div className="dashboard-rainbow-card-expand-btn">
                            <img src={MoreIcon} />
                        </div>


                    </div>

                    <div className="dashboard-rainbow-card" style={{background: 'radial-gradient(90.3% 87.16% at 9.7% 8.59%, #F2B94A 5.73%, #EE3F7E 43.12%, #8E48E8 66.73%, #5AB7EC 97.92%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF'}}>

                        <div className="dashboard-transparent-overlay-triangles_bottom"> </div>

                        <div className="dashboard-transparent-overlay-triangles_top"></div>

                        <div className="dashboard-rainbow-card-black-banner">
                           <div className="dashboard-rainbow-card-black-banner-container">

                               <button className="dashboard-rainbow-card-approve-btn"> Approve </button>
                               <button className="dashboard-rainbow-card-decline-btn">  X </button>

                            </div>

                        </div>
                        <div className="dashboard-rainbow-card-expand-btn">
                            <img src={MoreIcon} />
                        </div>


                    </div>
                    
                    <div className="dashboard-rainbow-card" style={{background: ' radial-gradient(83.71% 86.71% at 9.7% 8.59%, #A64AF2 5.73%, #BA3FEE 43.12%, #E848C9 66.73%, #ECA05A 97.92%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF;'}}>

                        <div className="dashboard-transparent-overlay-triangles_bottom"> </div>

                        <div className="dashboard-transparent-overlay-triangles_top"></div>

                        <div className="dashboard-rainbow-card-black-banner">
                           <div className="dashboard-rainbow-card-black-banner-container">

                               <button className="dashboard-rainbow-card-approve-btn"> Approve </button>
                               <button className="dashboard-rainbow-card-decline-btn">  X </button>

                            </div>

                        </div>
                        <div className="dashboard-rainbow-card-expand-btn">
                            <img src={MoreIcon} />
                        </div>


                    </div>

                    </div>

                </div>

                </div>


                <br />
                <br />


                <div className="dashboard-section-2">
                    <p className="bodyText"> Resume Chats </p>
                    <p className="body-subtitle"> 15 total chats </p> 
                    <br />

                    <div className="dashboard-rainbow-card-gradient-card">

                        <div className="dashboard-rainbow-card-gradient-transparent-card">
                            
                            <div className="dashboard-rainbow-card-gradient-user-profile-card">

                                <div className="">

                                    <img className="dashboard-rainbow-card-gradient-user-profile-card-img" src={"https://media-exp1.licdn.com/dms/image/C4D03AQE505jykxoelQ/profile-displayphoto-shrink_200_200/0/1607291489330?e=1655337600&v=beta&t=V3up5Df89CpERCe6-X7u8p9mzMkKcbCN0_Yt4xPuu8Y"} />



                                </div>

                                


                            </div>


                        </div>

                    </div>



                </div>

                <br />

                <div className="dashboard-section-3">
                    <div className="bodyText"> Your Profile </div>
                    
                    <div className="profile-card-container">
                        <div className="profile-card">
                            <div className="profile-container">
                                <div className="profile-pic-container">
                                    <div className="profile-pic">
                                        <div className="profile-img-container">
                                            <img src={ProfileImg} />   
                                        </div>
                                            
                                    </div>
                                
                                </div>

                                <div className="stylist-name">
                                    Kimia K
                                </div>
                                <div className="check-mark">
                                     <img src={CheckCircle} />
                                </div>
                                    
                            </div>    
                            <div>
                                <ImgGrid imagesURL={['https://img.haikudeck.com/mg/9bd5394bf4_1454007281899.jpg', 'https://img.haikudeck.com/mg/c8b7210827_1454007183998.jpg', 
                            'https://img.haikudeck.com/mg/87d2a5447a_1454006397342.jpg', 'https://img.haikudeck.com/mg/b8678b1276_1454008278744.jpg', 'https://img.haikudeck.com/mg/e42d4485b7_1454008455386.jpg',
                            'https://img.haikudeck.com/mg/4ed8b0d6c2_1454008432952.jpg']} />
                            </div>
                            
                        </div>
                   
                    </div>  
                    </div>

                        
                </div>


            </div>

        
    )

};