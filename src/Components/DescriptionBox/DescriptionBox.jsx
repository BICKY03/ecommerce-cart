import React from "react";
import './DescriptionBox.css';

const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                Urban Elegance is a modern clothing brand that merges sophisticated style with urban flair. Designed for the fashion-forward individual, our collections encapsulate the dynamic spirit of city life while maintaining an air of timeless elegance. Whether you're dressing for a boardroom meeting or a casual night out, Urban Elegance offers versatile pieces that elevate any wardrobe
                </p>
                <p>
                Our brand caters to young professionals and style-conscious individuals aged 25-45 who seek to make a statement with their attire. They value quality, sustainability, and the latest trends, but also appreciate classic silhouettes that never go out of fashion.
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox;