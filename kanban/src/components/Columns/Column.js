/* eslint-disable jsx-a11y/alt-text */
import "./Column.css"

function Column(props) {
    const {children, img, color, text_color} = props;
    return (

        <div className="column_Container">
            <div className = "column_border">
            </div>
                <div className = {`column1 ${color}`}>
                  <h1 className ={`text${text_color}`}>{children}</h1>        
                </div>
        
        </div>
      
    );
  } 
  
  export default Column;