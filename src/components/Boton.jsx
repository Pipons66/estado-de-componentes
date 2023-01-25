import React from 'react'
import Button from 'react-bootstrap/Button'
function Boton(props) {
  const { text } = props;
  return (
    <div>
        <Button className='btn btn-primary' type='submit'>{ text }</Button>
    </div>
  )
}

export default Boton