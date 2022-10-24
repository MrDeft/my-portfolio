import React from 'react';
import { Link } from 'react-router-dom';
import languages from './languages.json'

function Language() {
    return (
        <div id='languages'>
            <h1 id='languages-title'>LANGUAGES</h1>
            <ul className='languages-comp'>
                {
                    languages.map(e => (
                        <Link key={e.id} to={`/languages/${e.id}`}>
                            <li className='blogs-list'>
                                <img src={e.images} alt="" />
                                <h4>{e.name}</h4>
                            </li>
                        </Link>
                    )
                    )
                }
            </ul>
        </div>
    )
}
export default Language