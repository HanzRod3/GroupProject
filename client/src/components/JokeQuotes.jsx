import { useState, useEffect } from "react";
import axios from "axios";

const JokeQuotes = (props) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10`
      )
      .then((res) => {
        const jokeList = res.data.jokes.map((list) => list.joke);
        setJokes(jokeList);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div className="card bg-primary text-lg" style={{ width: 2000 }}>
        <h5 className="card-title text-light">Jokes </h5>
        <ul className="text-light">
          {jokes.map((joke, index) => (
            <li key={index}>{joke}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JokeQuotes;
