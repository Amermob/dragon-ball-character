import { useEffect, useState } from "react";
import "./assets/dragonball.css";

export default function DragonBall() {
  const [names, setNames] = useState([]);
  let [count, setCount] = useState(1);
  count > 6 && setCount(1);

  useEffect(() => {
    const fetchData = async () => {
      const _ = await fetch(
        `https://dragonball-api.com/api/characters?page=${count}&limit=10`
      )
        .then((res) => res.json())
        .then((data) => {
          setNames(
            data.items.map((item) => {
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
        })
        .catch(() => {
          const img = document.createElement("img");
          const text = document.createElement("h2");
          const a = document.createElement("a");

          a.href = "https://web.dragonball-api.com/documentation";

          a.target = "_blank";

          a.textContent = "Link to the API Doc";

          a.className = "link-to-api-doc";

          text.className = "text-img";

          text.textContent = "Error 404";

          img.className = "error";
          img.src =
            "imgs/vegeta-under-the-rain.gif";
          document.body.appendChild(img);
          document.body.appendChild(text);
          text.appendChild(a)
        });
    };
    fetchData();
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
          <img
            src="/dragon-ball-character/public/imgs/vegeta-header.png"
            alt="vegeta-as-al-ogo"
          />
          <p>Dragon ball</p>
        </div>
        <a target="_blank" href="https://github.com/Amermob">
          More Projects
        </a>
      </header>
      <main>
        <section>{names}</section>
        <button onClick={btn}>Page {count}/6</button>
      </main>
    </>
  );
}
