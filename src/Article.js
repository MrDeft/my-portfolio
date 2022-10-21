import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Articles from './content.json'

function Article() {
    const { id } = useParams();
    const user = Articles[id - 1];
    const closeBtn = useNavigate();
    function closeFunc() {
        closeBtn(-1)
    }
    return (
        <div id='article' className='article'>
            <button onClick={closeFunc} id='close-article'>Close</button>
            <h1 className='article-title'>{user.title}</h1>
            {user.dataText.map(e => (
                <p className='article-text'>{e.text}</p>
            ))}
        </div>
    )
}
export default Article