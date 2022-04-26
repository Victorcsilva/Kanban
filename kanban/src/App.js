import './App.css';
import Column from './components/Columns/Column';
 


function App() {
  return (
    <div className="container">

     <Column color = "column1" >
        <img src = {require("./components/Icon/caderneta.png")} />
        <p className ="text">To Do</p> 
     </Column>

     <Column color = "column1_orange">
       <img src = {require("./components/Icon/notebook.png")} />
        <p className ="text">In Progress</p>
     </Column>

     <Column color = "column1_purple">
      <img  src = {require("./components/Icon/caneta.png")} />
        <p className ="text">Review</p>
     </Column> 
    
     <Column color = "column1_green">
     <img src = {require("./components/Icon/foguete.png")} />
      <p className ="text_text_color " >Done</p>
   
     </Column>
    
    </div>
  );
}

export default App;
