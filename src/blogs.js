import React from 'react';
import { Link } from 'react-router-dom';
import Article from './content.json'

function Blogs() {
    return (
        <div id='blogs'>
            <h1 id='blogs-title'>Resent Blogs</h1>
            <ul className='blogs-comp'>
                {
                    Article.map(e => (
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
        </div>
    )
}
export default Blogs