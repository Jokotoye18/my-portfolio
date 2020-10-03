import React from 'react'
import myPic from './images/Optimized-IMG_20190618_135907_7.02ded70abb11.jpg'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-img">
                    <img src={myPic} alt="Jokotoye Ademola"></img>
                </div>
                <div className="about-content">
                    <p className="lead"><strong>
                    Hi there! My name is <a href="https://twitter.com/AkinJokotoye">@AkinJokotoye</a> and am a Fullstack Developer from Nigeria.
                        I have experience building both server-side and client-side webapps on Django and React respectively. Obsessed for impact.
                    </strong>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
