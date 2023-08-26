import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div>
        <Spinner 
        animation="border" 
        role='status'
        style={{
            height:'100px',
            width:'100px',
            margin:'auto',
            display:'block'
        }}  
        >


        </Spinner>

        <span className='sr-only'>Yükleniyor...</span>

    </div>
  )
}

export default Loader