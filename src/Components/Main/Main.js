// Main.js
import React, { memo } from 'react';
import Banner from "./Banner";
import "./main.scss";

function Main() {
  const data = [
    {
      id: 1,
      title: "Galaxy Book4 Ultra",
      content: "Get $1500 or more.",
      image: "https://images.samsung.com/is/image/samsung/assets/us/discover-samsung-event/03102024/mobile_computing/HP-Shop-MobileComputing-Small-FullCard-GB4Ultra-D-V2.jpg?$330_330_JPG$"
    },
    {
      id: 2,
      title: "Galaxy Buds2 Pro",
      content: "Get up to $150",
      image: "https://images.samsung.com/is/image/samsung/assets/us/home/04042024/SDSAC-7353_Buds2_Pro_Small_Tile_DT_330x330.jpg?$330_330_JPG$"
    },
    {
      id: 3,
      title: "Galaxy S24 Ultra",
      content: "Get up to $750",
      image: "https://images.samsung.com/is/image/samsung/assets/us/home/04152024/SDSAC-7259-S24U-HP-MM-LargeTile-DT-684x684.jpg?$684_684_JPG$"
    },
    {
      id: 4,
      title: "Galaxy Tab S9 Series",
      content: "Get up to $1800",
      image: "https://images.samsung.com/is/image/samsung/assets/us/discover-samsung-event/03102024/mobile_computing/SHP_MM-Mobile_tile-2_DT.jpg?$330_330_JPG$"
    },
    {
      id: 5,
      title: "Galaxy Watch 6 Series",
      content: "Get up to $250",
      image: "https://images.samsung.com/is/image/samsung/assets/us/discover-samsung-event/03102024/mobile_computing/HP-MM-Mobile-Tablets-Watch6-Series-330x330-pc.jpeg?$330_330_JPG$"
    },
    {
      id: 6,
      title: "2024 OLED TV",
      content: "Try OLED Glary - Free Technology",
      image: "https://images.samsung.com/is/image/samsung/assets/us/home/04112024/image-2024-4-11_11-33-23.png?$330_330_PNG$"
    },
  ];

  const Data = data.map(product => (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.content}</p>
      <button>Buy now</button>
    </div>
  ));   

  return (
    <div>
      <Banner
        title="Shop all latest offers and innovations"
        link="For you"
        link1="Mobile & computing"
        link2="TV & Audio"
        link3="Home Appliances"
        link4="Samsung Live"
        link5="For Business"
        data={data}
        Data={Data} 
      />
      <Banner
        tit="Mobile & Computing"
        li1="Galxy S 24 Ultra"
        li2="Galxy S24+"
        li3="Galxy Book4 Ultra"
        li4="Galxy tab S9 Series"
        rasm = "https://images.samsung.com/is/image/samsung/assets/us/home/04152024/SDSAC-7185-S24U-HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$"
        s24ultra = "Galxy S24 Ultra"
        s24pi = "get up $750 trede-in $75 instand Samsung credit with particupatinf caries *Try 30days or get a full refund "
        btn = "Buy now"
      />
      <Banner
        tit="TV & Audio"
        li1="The freme"
        li2=" The Freestyle 2nd Gen"
        li3="Music Freme"
        rasm = "https://images.samsung.com/is/image/samsung/assets/us/home/04112024-2/Homepage_LOB_Lifestyle-WK_Music-Frame_Desktop_1440x810.jpg?$1440_810_JPG$"
        s24ultra = "Turn up style"
        s24pi = "The purchase a Music Freme and save $50 on each aditional Music Freme"
        btn = "Buy now"
      />
      <Banner
        tit="Home Appliances"
        li1="Bespoke  AI"
        li2=" Bespoke Refrigiter"
        li3="Bepoke Lundry"
        rasm = "https://images.samsung.com/is/image/samsung/assets/us/home/04022024/LOB_Bespoke-AI.png?$1440_810_JPG$"
        s24ultra = "New Bespoke AI Aplians "
        s24pi = "Pre order and save upto $1,200 on our lantest technology"
        btn = "Pre-order"
      />
      <Banner
        tit="Sustainability"
        li1="Certifed RE -Newed"
        li2=" How to recyle"
        li3="Bepoke Lundry"
        rasm = "https://images.samsung.com/is/image/samsung/assets/us/home/03252024-2/sustainability-1-dt.jpg?$1440_810_JPG$"
        s24ultra = "New Bespoke AI Aplians "
        s24pi = "Pre order and save upto $1,200 on our lantest technology"
        btn = "Learn more"
      />
    </div>
  );
}

export default memo(Main);
