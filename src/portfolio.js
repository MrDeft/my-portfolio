import React from 'react';
import kunuz from './images/kunuz.png'
import folio from './images/folio.png'
import youtube from './images/youtube.png'
import coffee from './images/coffee.png'
import devicer from './images/devicer.png'
import empoloyee from './images/empoloyee.png'
import imgsave from './images/imgsave.png'
import product from './images/product.png'

function Portfolios() {
    return (
        <div id='portfolios'>
            <h1 id='portfolios-title'>Portfolios</h1>
            <div className='portfolios-component'>
                <ul className='portfolio-container'>
                    <li className='portfolio-items'><a href="https://ab-product.netlify.app"><img src={product} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://ab-kunuz.netlify.app"><img src={kunuz} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://ab-folio.netlify.app"><img src={folio} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://ab-youtube.netlify.app"><img src={youtube} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://ab-coffee.netlify.app"><img src={coffee} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://ab-devicer.netlify.app"><img src={devicer} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://ab-new-employe.netlify.app"><img src={empoloyee} alt="img" /></a></li>
                    <li className='portfolio-items'><a href="https://img-save.netlify.app"><img src={imgsave} alt="img" /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Portfolios