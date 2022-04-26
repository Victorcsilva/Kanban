/* eslint-disable jsx-a11y/alt-text */
import "./Column.css"

function Column(props) {
    const {children, img, color, text_color} = props;
    return (

        <div className="column_Container">
            <div className = "column_border">
            </div>
                <div className = {`column1 ${color}`}>
                  <p className ={`text${text_color}`}>{children}</p>        
                </div>
        
        </div>
      
    );
  } 
  
  export default Column;