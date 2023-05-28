import React from 'react'
import { LinksStyle } from '../../styles/Links.styles'
import Image from 'next/image'
import Link from 'next/link'

function index() {
  return (
    <>
        <LinksStyle />
        <div className='links-container'>
            <Image className='links-avatar' src='/src/images/links-small.png' width='120' height='120' />
            <h1>Eduardo Zaqueu</h1>
            <p>Nutrição descomplicada</p>  
            <div className="links-wrapper">
                <Link className='links-card-w' href="/planos">
                    <Image className='links-card' src='/src/images/c11.png' width='420' height='210' />
                </Link>
                <Link className='links-card-w' href="/">
                    <Image className='links-card' src='/src/images/c12.png' width='420' height='210' />
                </Link>
            </div> 
        </div>
        <div className="links-footer">
            <p>© 2021 #TEAMZED | Todos os direitos reservados.</p>
        </div> 
    </>
  )
}

export default index
