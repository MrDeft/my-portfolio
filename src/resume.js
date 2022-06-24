import React from 'react'

function Resume() {
    return (
        <div id='resume'>

            {/* My Skills */}
            <div className='my-skills'>
                <h1 id='my-skills-title'>My Skills</h1>
                <ul className='my-skills-comp'>
                    <li className='my-skills-list'><h3>HTML5</h3><div><span className='procent'>80%</span><span className='progress' id='html-progress'></span></div></li>
                    <li className='my-skills-list'><h3>CSS3</h3><div><span className='procent'>70%</span><span className='progress' id='css-progress'></span></div></li>
                    <li className='my-skills-list'><h3>Javascript</h3><div><span className='procent'>50%</span><span className='progress' id='js-progress'></span></div></li>
                    <li className='my-skills-list'><h3>jQuery</h3><div><span className='procent'>50%</span><span className='progress' id='jquery-progress'></span></div></li>
                    <li className='my-skills-list'><h3>ReactJS</h3><div><span className='procent'>30%</span><span className='progress' id='react-progress'></span></div></li>
                    <li className='my-skills-list'><h3>Photoshop</h3><div><span className='procent'>20%</span><span className='progress' id='photoshop-progress'></span></div></li>
                </ul>
            </div>


            {/* My Resume */}
            <div id='my-resume'>
                <h1 id='my-resume-title'>Resume</h1>
                <ul className='my-resume-comp'>
                    <h1 className='my-resume-comp-title'>Educational Qualifications</h1>
                    <li className='my-resume-list'>
                        <span className='my-resume-date'>2016 - 2019</span>
                        <span className='my-resume-text'>
                            <h2>Talaba</h2>
                            <p className='my-resume-p'>Neft va Gaz Ko'llej</p>
                            <p className='my-resume-lorem'>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur
                                consequatur accusamus vero eum facere exercitationem
                                velit suscipit ipsam placeat libero. Deleniti exercitationem
                                nostrum quasi. Molestiae, vel porro.</p>
                        </span>
                    </li>
                    <li className='my-resume-list'>
                        <span className='my-resume-date'>2019 - 2020</span>
                        <span className='my-resume-text'>
                            <h2>Abituriyent</h2>
                            <p className='my-resume-p'>NMPI</p>
                            <p className='my-resume-lorem'>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur
                                consequatur accusamus vero eum facere exercitationem
                                velit suscipit ipsam placeat libero. Deleniti exercitationem
                                nostrum quasi. Molestiae, vel porro.</p>
                        </span>
                    </li>
                    <li className='my-resume-list'>
                        <span className='my-resume-date'>2020 - 2024</span>
                        <span className='my-resume-text'>
                            <h2>Talaba</h2>
                            <p className='my-resume-p'>TATU NF</p>
                            <p className='my-resume-lorem'>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur
                                consequatur accusamus vero eum facere exercitationem
                                velit suscipit ipsam placeat libero. Deleniti exercitationem
                                nostrum quasi. Molestiae, vel porro.</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Resume