import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllChanel } from "../../redux/action/index";
import Header from "../header/Header";
export default function Home() {
  const dispatch = useDispatch();
  const allchanels = useSelector((state) => state.allchanel);

  useEffect(() => {
    dispatch(getAllChanel());
  }, [dispatch]);

  return (
    <div className="bg-[#00A8E8] min-h-screen">
      <Header/>
      <menu className="flex  flex-wrap gap-10 justify-center ">
        <div className="flex  gap-10 flex-wrap justify-center  ">
          {allchanels?.map((e) => {
            return (
              <div key={e.id}>
                <Cards id={e.id} image={e.image} link={e.link} />
              </div>
            );
          })}
        </div>
      </menu>
      <footer>La mejor Tvonline</footer>
    </div>
  );
}
