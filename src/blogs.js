import React from 'react';
import { Link } from 'react-router-dom';
import Article from './content.json'

function Blogs() {
    const m = Article
    return (
        <div id='blogs'>
            <h1 id='blogs-title'>Resent Blogs</h1>
            <ul className='blogs-comp'>
                {
                    m.map(e => (
                        <Link key={e.id} to={`/blogs/${e.id}`}>
                            <li className='blogs-list'>
                                <h4>{e.title}</h4>
                                <p>{e.about}</p>
                            </li>
                        </Link>
                    )
                    )
                }
            </ul>
            {/* <ul className='blogs-pages'>
                <li className='blogs-pages-items'>1</li>
                <li className='blogs-pages-items'>2</li>
                <li className='blogs-pages-items'>3</li>
                <li className='blogs-pages-items'>next</li>
            </ul> */}
        </div>
    )
}
export default Blogs