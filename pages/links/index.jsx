import React from 'react'
import { LinksStyle } from '../../styles/Links.styles'
import Image from 'next/image'

function index() {
  return (
    <>
        <LinksStyle />
        <div className='links-container'>
            <Image className='links-avatar' src='/src/images/links-small.png' width='120' height='120' />
            <h1>Eduardo Zaqueu</h1>
            <p>Nutrição descomplicada!</p>  
        <div className="links-wrapper">
            <a href="https://teamzed.com.br/planos" target="_blank" rel="noreferrer">
                <Image className='links-card' src='/src/images/c11.png' width='450' height='210' />
            </a>
            {/*<a href="https://teamzed.com.br" target="_blank" rel="noreferrer">
                <Image className='links-card' src='/src/images/linkedin.png' width='300' height='300' />
            </a>*/}
        </div>  
        </div>
    </>
  )
}

export default index
