import style from "../css/modules/TheCard.module.css";
import cardIMG from "../assets/iceland.jpg"
import TheButton from "./TheButton";

function TheCard(props) {
  return (
    <>
      <div className="h-[520px] max-w-sm rounded overflow-hidden shadow-lg ">
      <img className="w-full" src={cardIMG} alt="Iceland"/>        
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
          {props.content.slice(0, 50)}...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.tags}
          </span>
        </div>
        <TheButton testo="Scopri di più"/>
      </div>
    </>
  );
}

export default TheCard;
