import style from "../css/modules/TheCard.module.css";
import cardIMG from "../assets/iceland.jpg";
import TheButton from "./TheButton";

const colorMap = {
  html: "bg-red-300",
  css: "bg-blue-300",
  js: "bg-yellow-300",
  php: "bg-purple-300",
};

function TheCard({ title, content, tags, image, published }) {
  const colorMap = {
    html: "bg-red-300",
    css: "bg-blue-300",
    js: "bg-yellow-300",
    php: "bg-purple-300",
  };

  return (
    <>
      {
        published && (
          //-------------------------
          <div className=" max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full" src={cardIMG} alt="Iceland" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                {content.slice(0, 50)}...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <ul>
                {tags.map((tag, index) => (
                  <li
                    className={colorMap[tag] + " font-bold text-white rounded"}
                    key={index}
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <TheButton testo="Scopri di più" />
          </div>
        )
        //--------------------------
      }
    </>
  );
}

export default TheCard;
