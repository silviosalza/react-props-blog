import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/TheHeader";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import TheCard from "./components/TheCard";
import posts from "./db/postdb.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TheHeader />
      <main className="main_content flex justify-center overflow-y-scroll">
        <div className="grid grid-cols-4 gap-5">
          {posts.map((post, i) => {
            return (
              post.published && (
                <div key={post.id}>
                  <TheCard
                    published={post.published}
                    title={post.title}
                    content={post.content}
                    tags={post.tags}
                  ></TheCard>
                </div>
              )
            );
          })}
        </div>
      </main>
      <TheFooter />
    </>
  );
}

export default App;
