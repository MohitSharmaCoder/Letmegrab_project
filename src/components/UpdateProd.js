import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProd = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [updateProd, setUpdateProd] = useState({
        title: '',
        description: '',
        category:'',
        price:'',

    })
    const handleChange = (e) => {
        setUpdateProd({
            ...updateProd,
            [e.target.name]: e.target.value,

        });
    };
    const fetchProductData = async ()=>{
        // const resp = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((error)=>{console.log(error)})
        // setUpdateProd(resp.data)
        // console.log(resp.data)
        console.log("fetch function")
    }

    const handleSubmit = async (e) => { 
        e.preventDefault();
        // You can send the updated data to an API or perform other actions here
        // await axios.put(`https://fakestoreapi.com/products/${id}`,updateProd)
        navigate('/home')
        console.log('Updated Product Data:', updateProd);
        // Alternatively, you can display the data in an alert box
        alert(`Updated Product Data: ${JSON.stringify(updateProd )}`);
    };
    useEffect(()=>{
        fetchProductData()
    },[id])
    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h3>Update Product Details</h3>
                    <div className="changeValue">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={updateProd.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="changeValue">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={updateProd.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="changeValue">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={updateProd.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="changeValue">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={updateProd.category}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Update</button>
                </form>
            </Container>
        </>
    )
}


const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100%;
form{
    width:400px;
    padding:15px;
    border-radius:5px;
    border:1px solid #333;
    box-shadow: 0px 0px 5px #333;
    h3{
        margin-bottom:15px;
    }

    display:flex;
    flex-direction:column;

    .changeValue{
    display:flex;
    flex-direction:column;
    label{
        margin-bottom:5px;
    }
    input{
        height:30px;
        border:1px solid gray;
        margin-bottom:10px;
        padding:5px 7px;
        border-radius:5px;
    }
    input:focus {
        outline:none;
        border:1px solid #333333;
      }
    }
    button{
        background-color:#a89532;
        padding:6px 9px;
        border-radius:5px;
        border:none;
        color:#fff;
        font-weight:700;
    }
}
`
export default UpdateProd
