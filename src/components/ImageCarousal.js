import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Coffee from '../images/Coffee.jpg'
import Coffee2 from '../images/Coffeec.webp'
import Coffee3 from '../images/Coffee 2.webp'
import Coffee4 from '../images/Coffee 3.jpg'
import Coffee5 from '../images/Coffee 3b.webp'
import Coffee6 from '../images/Coffee 4.jpg'
import Coffee7 from '../images/Coffee 4b.webp'
import Coffee8 from '../images/Coffee 5.webp'
import Coffee9 from '../images/Coffee 6.webp'
const ImageCarousal = () => {
  const newArr = [Coffee,Coffee2,Coffee3,Coffee4,Coffee5,Coffee6,Coffee7,Coffee8,Coffee9]
  let settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
  }
  return (
    <Container className="slick-slider-container">
      <Carousel {...settings}>
        {newArr.map((cofe, index)=>{
          return (
        <Wrap key={index}>
          <a href='/'>
              <img src={cofe} alt="" />
              <div></div>
          </a>
        </Wrap>
          )
        })}
       
      </Carousel>    
    </Container>
  )
}

const Container = styled.div`
width: 100%;
// height:400px;
height:calc(100vh - 60px);
overflow:hidden;
@media screen and (max-width: 600px) {
  height:300px;
}
`
const Carousel = styled(Slider)`
// height:350px;
height:calc(100vh - 110px);
  & > button {
    opacity:0;
    height:100%;
    width:5vw;
    z-index:1;
    &:hover{
      opacity:1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button{
    &:before{
      font-size:10px;
      color:#000;
    }
  }

  li.slick-active button:before{
      color:#333333;
    }
    @media screen and (max-width: 600px) {
      height:250px;
    }
`

const Wrap = styled.div`
// height:calc(100vh - 60px);
position:relative;
a{
  img{
    width:100%;
    // height:400px;
    height:calc(100vh - 60px);
    object-fit:cover;
    overflow: hidden;
    z-index:0;
  }
  div{
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    background-color: #0000008c;
    z-index:3;
  }
}
@media screen and (max-width: 600px) {
  a{
    img{
      width:100%;
      height:290px;
      object-fit:cover;
      overflow: hidden;
  
    }
  }
}
`

export default ImageCarousal
