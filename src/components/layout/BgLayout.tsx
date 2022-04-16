import React from "react"
import PinkDiamond from "../../assets/chat/pink-diamond.svg"
import { FadeIn } from 'ts-react-fade';

export const BgLayout = ({title, subtitle, ...restProps}: any) => {
    return (
    <div>

            <div className="chat-page--top-section"></div>
            <div className="chat-page--last-section"></div>

            <div className="chat-page-header-container">

                <FadeIn delay={500}>
                    <p className="chat-page-header--title"> {title} <span style={{marginLeft: '13px', mixBlendMode: "color-dodge"}}> <img className="floating" src={PinkDiamond} /> </span> </p>
                    <p className="chat-page-header--subtitle"> {subtitle} </p>
                </FadeIn>

            </div>
        </div>
    )
}