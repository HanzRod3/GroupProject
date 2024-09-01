import {useState,useEffect } from "react";
import axios from 'axios';

const ZenQuotes = (props)=>{
    const [quotes,setQuotes]= useState([]);

    useEffect(() =>{
        const mode= 'random';
        let config = {
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            }
        }

        axios.get(`https://zenquotes.io/api/today/${mode}`, config)
        .then((result)=>{
            setQuotes(result.data.map((quote)=>{
                return {text:quote.q, author: quote.a};
            }));
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);

    

    return(
        <div className="d-flex justify-content-center">
            <div className="card bg-primary" style={{width:2000}}>
                <ul className="text-warning">
                {quotes.map((quote, index) => ( <li key={index}> <blockquote> <p>{quote.text}</p> <footer>{quote.author}</footer> </blockquote> </li> ))}
                </ul> 
            </div>
        
            <div className="row2">
            </div>
        </div>
    )
} 

export default ZenQuotes