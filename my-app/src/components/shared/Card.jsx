import PropTypes from 'prop-types'

 function Card ( {rate,children,reverse} ) {
    return (
    <>  
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
        </div>
   
    </>
  )
  }

  Card.defaultProps = {
    reverse: false,
  } 


Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
  export default Card

 


  /* condianal Class <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  yestaamel class card walla card.reverse 

  or condianal style 
  <div className='card' 
  style={{
    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000',
  }}*/