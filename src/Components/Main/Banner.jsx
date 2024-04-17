import React, {memo} from 'react'
import "./main.scss"
function Banner(props) {
  const data = [
    {
      id: 1,
      title: "Galxy book4 Ultra",
      content: "Get $1500 of more.",
      image: "https://images.samsung.com/is/image/samsung/assets/us/discover-samsung-event/03102024/mobile_computing/HP-Shop-MobileComputing-Small-FullCard-GB4Ultra-D-V2.jpg?$330_330_JPG$ "
    },
    {
      id: 2,
      title: "Galxy Boods2 pro",
      content: "Get up to $150",
      image: "https://images.samsung.com/is/image/samsung/assets/us/home/04042024/SDSAC-7353_Buds2_Pro_Small_Tile_DT_330x330.jpg?$330_330_JPG$"
    },
    {
      id: 3,
      title: "Galxy S24 Ultra",
      content: "Get to $750 ",
      image: "https://images.samsung.com/is/image/samsung/assets/us/home/04152024/SDSAC-7259-S24U-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$"
    },
    {
      id: 4,
      title: "Galxy Tab S9 Series",
      content: "Get to $1800 ",
      image: "https://images.samsung.com/is/image/samsung/assets/us/discover-samsung-event/03102024/mobile_computing/SHP_MM-Mobile_tile-2_DT.jpg?$330_330_JPG$"
    },
    {
      id: 5,
      title: "Galxy Watch 6 Series",
      content: "Get to $250 ",
      image: "https://images.samsung.com/is/image/samsung/assets/us/discover-samsung-event/03102024/mobile_computing/HP-MM-Mobile-Tablets-Watch6-Series-330x330-pc.jpeg?$330_330_JPG$"
    },
    {
      id: 6,
      title: "2024 Oled TV",
      content: "Try OLED Glary - Free Texnology ",
      image: "https://images.samsung.com/is/image/samsung/assets/us/home/04112024/image-2024-4-11_11-33-23.png?$330_330_PNG$"
    },
    ]
    const Data = data.slice(0, 6).map(product => (
      <div className="card" key={product.id}>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.content}</p>
        <button>Buy now</button>
      </div>
    ));
    
  return (

    <>
    
    <div className="Banner Conteiner">
        <h1>{props.title}</h1>
        <ul>
          <a href="#">{props.link}</a>
          <a href="#">{props.link1}</a>
          <a href="#">{props.link2}</a>
          <a href="#">{props.link3}</a>
          <a href="#">{props.link4}</a>
          <a href="#">{props.link5}</a>
        </ul>
        <div className="cards">
              {Data}
        </div>
    </div>
    
    </>

  )
}

export default memo( Banner)
