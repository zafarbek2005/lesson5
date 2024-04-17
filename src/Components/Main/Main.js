import React, {memo} from 'react'
import Banner from "./Banner"
import "./main.scss"

function main() {
    
  return (
   <div>  
    <Banner
        title="Shop all latest offers and innovations "
        link = "   For you "
        link1 = " Mobile & computing"
        link2 = "   Tv & Audio "
        link3 = "    Home Aplianss"
        link4 = "   Samsung live "
        link5 = "  For Business"
      />


</div>
  )
}

export default memo(main)