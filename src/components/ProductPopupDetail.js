import React from 'react'
import styled from 'styled-components'
import { IoCloseSharp } from "react-icons/io5";

const ProductPopupDetail = ({ product, onClose }) => {
  const { title, price, img, desc, category,key} = product

  return (
    <>
      <PopContainer key={key}>
        <MainCard>
          <button className="icon" onClick={onClose}>
            <IoCloseSharp />
          </button>
          <PCard>
            <div className="top_de">
              <img src={img} alt="" />
              <div className="img_right">
                <h3>{title}</h3>
                <h4>Price: ${price}</h4>
                <p className='des'>{category}</p>
                <ProdDetail>
                  <p>{desc}</p>
                  <button className="sell">Add To Cart</button>
                </ProdDetail>
              </div>
            </div>
          </PCard>
        </MainCard>
      </PopContainer>
    </>
  )
}


const PopContainer = styled.div`
z-index:1000;
position:fixed;
backdrop-filter: blur(15px);
width:55%;
height:450px;
top:60px;
padding:10px;
border-radius:5px;
border:1px solid #333;
@media screen and (max-width: 1024px) {
  width:70%;
height:450px;
left:30px;
}
@media screen and (max-width: 660px) {
  left:2.5%;
  width:95%;
height:550px;
}
`
const MainCard = styled.div`
width:100%;
overflow-y: scroll;
height:100%;
color:#333;
font-weight:800;
background-color:#ffff;
padding:15px;
border-radius:5px;
button{
  font-size:26px;
  width:40px;
  height:40px;
  background-color:#fff;
  border:none;
  color:#333;
  cursor:pointer;
}

&::-webkit-scrollbar {
  width: 10px;
  background-color: #52ab98;
}
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
&::-webkit-scrollbar-thumb {
  background-color: #2b6777b6;
  border-radius: 5px;
}
`
const PCard = styled.div`
.top_de{
  display:flex;
  justify-content:center;
}
.top_de img{
  width:45%;
  height:350px;
}
.img_right {
  width:50%;
  margin-left:20px;
}
.img_right h3{
  font-size:22px;
  color: #2b6777;
}
.img_right h4{
  font-size:18px;
  font-weight:700;
  margin:8px 0px;
}
.img_right .des{
  font-size:14px;
  font-weight:600;
  color:#333333;
}
@media screen and (max-width: 660px) {
  .top_de{
  display:flex;
  justify-content:center;
  flex-direction:column;
  }
  .top_de img{
    width:100%;
    height:350px;
    margin-bottom:15px;
  }
  .img_right {
    width:100%;
    margin-left:0px;
  }
}
`
const ProdDetail = styled.div`
p{
  margin-top:8px;
  font-size:16px;
  font-weight:600;
  color:#333333;
}

.sell{
margin-top:10px;
width:200px;
padding:8px 8px;
border:none;
border-radius:5px;
font-size:16px;
font-weight:600;
color:#ffffff;
background-color: #52ab98;
cursor:pointer;
}
.sell:hover{
  background-color: #2b6777;
}
`
export default ProductPopupDetail
