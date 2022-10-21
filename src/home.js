import React from 'react';

function Home() {
    return (
        <div id='home'>
            <h1 id='home-title'>Home</h1>
            <div className='home-comp'>
                <h1 id='home-subtitle'>
                    HI, I am <span className='home-myname'>Bouirjon Allashukirov</span>
                </h1>
                <p id='home-p'>
                    I'm on social media:
                </p>
                <ul className='social-comp'>
                    <li className='social-list'>
                        <a href='https://www.facebook.com/profile.php?id=100037966193278'>
                            <i className='bi bi-facebook'></i>
                        </a>
                    </li>
                    <li className='social-list'>
                        <a href='https://www.instagram.com/b_allashukirov7/'>
                            <i className='bi bi-instagram'></i>
                        </a>
                    </li>
                    <li className='social-list'>
                        <a href='https://twitter.com'>
                            <i className='bi bi-twitter'></i>
                        </a>
                    </li>
                    <li className='social-list'>
                        <a href='https://t.me/b_allashukirov'>
                            <i className='bi bi-telegram'></i>
                        </a>
                    </li>
                    <li className='social-list'>
                        <a href='https://github.com/MrDeft'>
                            <i className='bi bi-github'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Home