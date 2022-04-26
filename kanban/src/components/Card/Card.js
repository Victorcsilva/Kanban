import "./Card.css";



function Card(props) { 
    const {children,color,status} = props
    return (
            <div className='Card' >  
                  <p className="textcard">{children}</p>
                  <span className={`label${color}`}>{status}</span>
            </div>
  )
};
  
 

export default Card;
