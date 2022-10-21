import React from 'react';

function About() {
    return (
        <div id='about'>
            <h1 id='about-title'>About me</h1>
            <div className='about-component'>
                <h2>I am <span>Bouirjon Allashukirov</span></h2>
                <p className='about-text'>
                    I am a frontend web developer. Currently, I am studying at the 3rd stage of software engineering at Tashkent University of Information Technology, Nukus branch.
                </p>
                <ul className='about-com'>
                    <li className='about-list'><span>Full Name</span> : Bouirjon Allashukirov</li>
                    <li className='about-list'><span>Age</span> : 22 Years</li>
                    <li className='about-list'><span>Nationality</span> : Uzbekistan</li>
                    <li className='about-list'><span>Langeages</span> : Uzbek, Kazakh, English</li>
                    <li className='about-list'><span>Address</span> : Nukus, Karakalpakstan</li>
                    <li className='about-list'><span>Interests</span> : IT, Psychology, Business, Politics</li>
                </ul>
            </div>
        </div>
    )
}
export default About