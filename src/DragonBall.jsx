import { useEffect, useState } from "react";
import "./assets/dragonball.css";
import axios from "axios";
export default function DragonBall() {
  const [names, setNames] = useState([]);
  let [count, setCount] = useState(1);
  count > 5 && setCount((count = 1));

  useEffect(() => {
    axios
      .get(`https://dragonball-api.com/api/characters?page=${count}&limit=10`)
      .then((res) => {
        setNames(
          res.data.items.map((item) => {
            return (
              <div key={item.id} className="character">
                <img src={item.image} />
                <h2>
                  Name: <span>{item.name}</span>
                </h2>
                <p>
                  Base Ki: <span>{item.ki}</span>
                    </p>
                                    <p>
                  Max Ki: <span>{item.maxKi}</span>
                    </p>
                                    <p>
                  Race: <span>{item.race}</span>
                    </p>
                    
              </div>
            );
          })
        );
        console.log(res.data);
      });
  }, [count]);

  function btn() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCount(count + 1);
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src="imgs/vegeta-header.png" alt="" />
          <p>Dragon ball</p>
        </div>
        <a target="_blank" href="https://github.com/Amermob">
          More Projects
        </a>
      </header>
      <div className="main">
        <section>{names}</section>
        <button onClick={btn}>Next Page</button>
      </div>
    </>
  );
}
