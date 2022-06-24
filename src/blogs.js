import React from 'react';

function Blogs() {
    return (
        <div id='blogs'>
            <h1 id='blogs-title'>Resent Blogs</h1>
            <ul className='blogs-comp'>
                <li className='blogs-list'>
                    <h4>Markdown and Html supported blog.</h4>
                    <p>Markdown and Html supported blog.</p>
                </li>
                <li className='blogs-list'>
                    <h4>Installing NodeJS on your device.</h4>
                    <p>Installing NodeJS on your device.</p>
                </li>
                <li className='blogs-list'>
                    <h4>UI/UX design starter with Adobe XD.</h4>
                    <p>UI/UX design starter with Adobe XD.</p>
                </li>
                <li className='blogs-list'>
                    <h4>Boost your post for increasing sales.</h4>
                    <p>Boost your post for increasing sales.</p>
                </li>
                <li className='blogs-list'>
                    <h4>Difference between GatsbyJS and NextJS.</h4>
                    <p>Difference between GatsbyJS and NextJS.</p>
                </li>
                <li className='blogs-list'>
                    <h4>How to choose javascript framework for project.</h4>
                    <p>How to choose javascript framework for project.</p>
                </li>
            </ul>
            <ul className='blogs-pages'>
                <li className='blogs-pages-items'>1</li>
                <li className='blogs-pages-items'>2</li>
                <li className='blogs-pages-items'>3</li>
                <li className='blogs-pages-items'>next</li>
            </ul>
        </div>
    )
}
export default Blogs