import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("");
  const [list, setList] = useState(data);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data);
        setList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (filter !== "") {
      const newList = data?.filter((d) => d.available);
      setList(newList);
    } else {
      setList(data);
    }
  }, [filter]);

  return (
    <main className="w-full bg-darker min-h-screen py-72 bg-[url('./assets/bg-cafe.jpg')] bg-no-repeat bg-[center_top] bg-[length:100%_300px]">
      <div className="bg-dark w-fit mx-auto py-16 px-[10%] rounded-2xl">
        <h1 className="text-[2rem] font-bold text-center">Our Collection</h1>
        <p className="text-center text-gray py-6 max-w-[30rem] mx-auto font-semibold text-base">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="font-semibold flex justify-center items-center gap-5">
          <button
            onClick={() => setFilter("")}
            className={`${
              filter === "" && "bg-gray"
            } px-4 py-[10px] rounded-xl`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter("available")}
            className={`${
              filter === "available" && "bg-gray"
            } px-4 py-[10px] rounded-xl`}
          >
            Available Now
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 md:gap-8">
          {list && list.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </main>
  );
}

export default App;
