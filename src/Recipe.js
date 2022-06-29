import React from 'react';
import './Recipe.css';
const Recipe =({receiptData}) =>{
    return(

        <div className="card">
    <div className="card-header">
    <img src={receiptData.image} alt =""/>  
<div className="cover"></div>   
<div className="menu"></div>

<div className="name">
    <span className="title"></span> 
</div>
 
</div>
<div className="container">
      <div className="left-section">
        <h3>{receiptData.label}</h3>
        <p>{receiptData.ingredientLines}</p>
        <button className="detailsBtn" >More Details</button>
      </div>
      <div className="right-section">
        <div className="item">
            <span className="num">{Math.round(receiptData.calories)}</span>
            <span className="word">KCAL</span>
        </div>
        <div className="item">
            {
                
                    receiptData.totalNutrients.PROCNT? (receiptData.totalNutrients.PROCNT.quantity ? ( < span className = "num" > {
                        Math.round(receiptData.totalNutrients.PROCNT.quantity)
                    } g</span>) :(<span className = "num"> ?? </span>)):(<span className = "num"> ?? </span>)
                
            }
            <span className="word">Protein</span>
        </div>
        <div className="item">
        {
                
                receiptData.totalNutrients.CHOCDF?(receiptData.totalNutrients.CHOCDF.quantity ? ( < span className = "num" > {
                    Math.round(receiptData.totalNutrients.CHOCDF.quantity)
                } g</span>) :(<span className = "num"> ?? </span>)):(<span className = "num"> ?? </span>)
            
        }
            <span className="word">Carbs</span>
        </div>
      </div>
  </div>
</div>

    );
};
export default Recipe;