import './App.css';
import Box from './components/Box/Box.js'
import Card from './components/Card/Card.js';
import Woman from './components/Avatar/Female.png'
import Man from './components/Avatar/man.png'

function App() {

  return (
    <div className="container">
      <h1 className='title'> Kanban </h1>

   <div className='box'> 
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
  </div>


  <div className='box'> 
        <Card>
           <p>Coffee Break</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span span className='label_orange'>Always</span>
        </Card>
        <Card>
           <p>Updating Portfolio</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_orange'>Webflow</span>
         </Card> 
     </div>  
 
 <div className='box'> 
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
           <span className='label_purple'>Sourcing</span>
        </Card> 
     </div>  
     <div className='box'> 
        <Card>
           <p>Style Guide</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_green'>UI</span>
         </Card>
         <Card>
           <p>Component Library</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_green'>UI</span>
         </Card> 
         <Card>
           <p>Sticker Components</p>
           <img src={Woman} className='img' alt='woman'></img>
           <span className='label_green'>UI</span>
         </Card> 
     </div> 

  </div>
  );
}

export default App;
