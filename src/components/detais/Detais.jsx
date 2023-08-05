import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getChanelDetails } from "../../redux/action/index";
import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getChanelDetails(id));
  }, [dispatch, id]);

  const channel = useSelector((state) => state.details);
  console.log(channel);

  return channel ? (
    <div className="bg-[#00A8E8] min-h-screen">
      <Header />
<div className="flex justify-center mt-5"><img className="w-[100px] flex"  src={channel.image} alt="canal"/></div>
      
      <div className="link-b">
        <Link className="flex justify-center mb -10" to={"/home"}>
        <button className="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-400 shadow-md  hover border-b border-blue-200 hover:shadow-sm transition-all duration-500">Cambiar Canal</button>
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <iframe
          width="560"
          height="315"
          src={channel.link}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen
        />
      </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
      <footer>La mejor Tvonline</footer>
    </div>
  );
}
