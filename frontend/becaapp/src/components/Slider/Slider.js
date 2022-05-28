import React, {useState,useEffect} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import axios from 'axios'

export default function Slider() {
    ///////////////////////
    const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=n9qVPTsRiU36udWLLESZZ3zldoWiLaT4",
    })
      .then((response) => {
        setList(response.data.results.slice(5, 11));
        console.log(response.data.results.slice(0, 5))
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);
      
    ///////////////////////

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    const vector=new Array(5)
    const vector2=new Array(5)
    const vector3=new Array(5)
    const moveDot = index => {
        setSlideIndex(index)
    }
        
        list.map((item,i) => { 
           
          return ( 
              
              <div>    
                  
        if (item.multimedia[0].url != null) {
            vector[i]=item.multimedia[0].url
        } 
        if (item.title != null) {
            vector2[i]=item.title  
            
        } 
        if (item.url != null) {
            vector3[i]=item.url   
        }     
         </div> 
           
          )    
              
} )
   
    
    return (
        
        
        <div className="container-slider">
              {console.log("aqui") } 
              {console.log(vector) } 
            
            {dataSlider.map((obj, index) => {
                
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >  
                        
                        {console.log("aqui2") } 
                        
                        
                        <img className='imgg' 
                        src={vector[index]} 
                        ></img>
                        
                        <a href={vector3[index]} target="_blank">
                        <div class="texto-encima"><h3>{vector2[index]}</h3></div>  
                        </a>                    
                        </div>
                    
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}