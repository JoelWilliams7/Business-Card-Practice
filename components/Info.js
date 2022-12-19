import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="image3.jpg"/>
            <div className="info--profile">
            <h1>Joel Williams</h1>
            <h3>React, Frontend Developer</h3>
            <h4>https://github.com/JoelWilliams7</h4>
            <div className="btn">
                <a className="email"><ion-icon name="mail-outline"></ion-icon><span> Email </span></a>
                <a className="linkedin"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a>
            </div>
            
            </div>
        </div>
    )
}