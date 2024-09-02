import { useState, useEffect } from "react";
import axios from "axios"

const PostForm = () => {

const [jokes, setJokes] = useState([])
    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=21')
            .then(res => res.data.jokes.map(list => setJokes([...jokes, list.joke])))
            .catch(error => console.log(error))
    },[])

    return(<>
        <p>{jokes}</p>
    </>)
}

export default PostForm