import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductPopupDetail from './ProductPopupDetail'
import { Link } from 'react-router-dom'

const Home = () => {
  const [categories, setCategories] = useState([]) // -------->
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productsData, setProductsData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null);
  const api = `https://fakestoreapi.com/products`
  const fetchProductData = async () => {
    try {
      const response = await axios.get(api);
      setProductsData(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error.message);
      // Handle the error appropriately, e.g., set an error state or show a message to the user.
    }
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  // const deleteProduct = async (id) => {
  //   // await axios.delete(`https://fakestoreapi.com/products`).catch((error)=>{console.log(error)})
  //   console.log('Deleted Product Id:', id);
  //   alert(`Deleted Product Id: ${JSON.stringify(id)}`);
  // }

  useEffect(() => {
    fetchProductData()
    const fetchCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(['', ...response.data]);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Container>
        <SearchInput>
          <label>
            Filter by Category: 
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <input id='searchIn' type="text" value={searchTerm} placeholder='Search Product...' onChange={handleChange} />
        </SearchInput>
        <ProductsList>
          {
            productsData.filter((val) => {
              if (searchTerm === "" && selectedCategory === "") {
                return val
              }
              else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) && selectedCategory === "") {
                return val
              }
              else if (searchTerm === "" && val.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
                return val
              }
              else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) && val.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
                return val
              }

            }).map((data) => {

              return (
                <ProductCard key={data.key}>
                  <img src={data.image} alt="" />
                  <ProdDetail>
                    <h3>{data.title.slice(0, 17)}...</h3>
                    <p className='category'>{data.category}</p>
                    <h4>Price: ${data.price}</h4>
                    <p className="desc">{data.description.slice(0, 63)}...</p>
                    <Actions>
                      <button className="designbtn" onClick={() => handleProductClick({
                        title: data.title,
                        price: data.price,
                        img: data.image,
                        category: data.category,
                        desc: data.description
                      })}>View</button>
                      {/* <Link className="designbtn" to={`/product/:${data.id}`}>Update</Link>
                      <button className="designbtn" onClick={() => { deleteProduct(data.id) }}>Delete</button> */}
                    </Actions>
                  </ProdDetail>
                </ProductCard>
              )
            })
          }
          {selectedProduct && <ProductPopupDetail product={selectedProduct} onClose={handleClosePopup} />}
        </ProductsList>
      </Container>
    </>
  )
}

const Container = styled.div`
background-color:#c8d8e4;
`

const SearchInput = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: #2b6777;
padding:10px;
input{
  height:30px;
  width:250px;
  padding:5px 6px;
}
label select{
  height:30px;
  border-radius:5px;
  border:none;
  font-size:18px;
  margin-left:8px;
}
label select:focus {
  outline:none;
  border:1px solid #333333;
}
label{
  font-size:20px;
  font-weight:700;
  color:#fff;
  margin-right:20px;
}

@media screen and (max-width: 660px) {
  label{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  label select{
    margin-top:5px;
  }
  flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 130px;
    padding: 15px 20px;
}
`
const ProductsList = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
gap:20px 15px;
padding:30px 100px;
@media screen and (max-width: 1024px) {
  grid-template-columns:repeat(3, 1fr);
  padding:30px 60px;
}
@media screen and (max-width: 990px) {
  grid-template-columns:repeat(3, 1fr);
  padding:30px 30px;
}
@media screen and (max-width: 660px) {
  grid-template-columns:repeat(1, 1fr);
  padding:20px 15px;
}
`

const ProductCard = styled.div`
// border:2px solid #f9f9f9; 
border-radius:5px;
padding:5px;
overflow:hidden;
img{
  width:80%; 
  height:200px;
  display:block;
  margin:auto;
}
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color:#ffffff;
position:relative;
`

const ProdDetail = styled.div`
padding:10px 10px 25px 10px;
.category{
  font-size:11px;
  margin-bottom:8px;
}
h3{
  font-size:22px;
  color: #2b6777;
}
h4{
  font-size:18px;
  font-weight:700;
  margin-bottom:8px;
}
.desc{
  font-size:14px;
  font-weight:600;
  color:#333333;
}
`
const Actions = styled.div`
margin-top:15px;
display:flex;
justify-content:space-between;
align-items:end;
.designbtn{
position:absolute;
left:0px;
bottom:0px;
right:0px;
text-decoration:none;
padding:8px 8px;
border:none;
border-radius:0px 0px 5px 5px;
font-size:16px;
font-weight:600;
color:#ffffff;
background-color: #52ab98;
cursor:pointer;
&:hover{
  background-color: #2b6777;
} 

// .designbtn:nth-child(1){
//   background-color:#4848c2;
//   color:#fff;
// }
// .designbtn:nth-child(2){
//   background-color:#3dcc53;
//   color:#333;
// }
// .designbtn:nth-child(3){
//  background-color:#E74C3C;
//  color: #fff;
// }
`
export default Home
