import './App.css';

import Card from './components/Card/Card.js';
import Woman from './components/Avatar/Female.png'
import Man from './components/Avatar/man.png'
import Column from './components/Columns/Column';

function App() {

  return (
    <div className="container">
      <h1 className='title'> Kanban </h1>

     <Column color = "column1" >
        <img src = {require("./components/Icon/caderneta.png")} />
        <p className ="text">To Do</p> 
         <Card>
           <p>Christmas Banners</p>
           <img src={Man} className='img' alt='woman'></img>
           <span className='label'>Label</span>
       </Card>
        <Card>
           <p>Redo Portfolio</p>
           <img src={Man} className='img' alt='woman'></img>
           <span className='label'>Label</span>
       </Card>   
     </Column>

     <Column color = "column1_orange">
       <img src = {require("./components/Icon/notebook.png")} />
        <p className ="text">In Progress</p>
         <Card>
           <p>Coffee Break</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_orange'>Always</span>
        </Card>
        <Card>
           <p>Updating Portfolio</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_orange'>Webflow</span>
         </Card> 
     </Column>

     <Column color = "column1_purple">
      <img  src = {require("./components/Icon/caneta.png")} />
        <p className ="text">Review</p>
        <Card>
           <p>Release to Figma Community</p>
           <img src={Man} className='img' alt='woman'></img>
           <span className='label_purple'>Release</span>
        </Card>
       <Card>
           <p>User Feedback</p>
           <img src={Man} className='img' alt='woman'></img>
           <span className='label_purple'>Feedback</span>
         </Card> 
         <Card>
           <p>Background images from humaaans.com</p>
           <img src={Man} className='img' alt='woman'></img>
           <span className='label_purple'>  Sourcing  </span>
        </Card> 
     </Column> 
    
     <Column color = "column1_green">
     <img src = {require("./components/Icon/foguete.png")} />
      <p className ="text_text_color " >Done</p>
    <Card>
           <p>Style Guide</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_green'>  UI  </span>
         </Card>
         <Card>
           <p>Component Library</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_green'> UI </span>
         </Card> 
         <Card>
           <p>Sticker Components</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_green'>UI</span>
         </Card> 
     </Column>
    
    </div>
  );
}

export default App;
