import { Link } from "react-router-dom";

export default function Cards({ image, id, link }) {
  return (
    <div>
      <div className="">
        <Link to={`/canal/${id}`}>
          <div className="flex gap-10 border-black border-[2px] p-2 rounded-lg mt-5 bg-white">
            <img className="h-[180px] w-[180px]" src={image} alt={image} />
          </div>
        </Link>
      </div>
    </div>
  );
}
