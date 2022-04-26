import "./Card.css";
import Woman from '../Avatar/Female.png'
import man from '../Avatar/man.png'

const Avatar = (props) => { 
    const Image = props
    return (
    <div>
    <Image>{Woman || man}</Image>
    </div>
)
}
  
 

export default Avatar;
