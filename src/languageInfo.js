import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import languages from './languages.json'

function LanguageInfo() {
    const { id_lan } = useParams();
    const user = languages[id_lan - 1];
    const closeBtn = useNavigate();
    function closeFunc() {
        closeBtn(-1)
    }
    console.log(user);
    return (
        <div id='language-info' className='article'>
            <img src={user.images2} alt="imgs" />
            <button onClick={closeFunc} id='close-article'>Close</button>
            <h1 className='article-title'>{user.title}</h1>

            {user.data.map((e, index) => (
                <p key={index} className='article-text'>{e.about}</p>
            ))}
        </div>
    )
}
export default LanguageInfo