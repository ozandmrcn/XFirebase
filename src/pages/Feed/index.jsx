import Nav from "./Nav";
import Aside from "./Aside";
import Main from "./Main";
import { useOutletContext } from "react-router-dom";
import PageLoader from "../../components/Loader/PageLoader";
import { useMediaQuery } from "react-responsive";

const Feed = () => {
  const user = useOutletContext();
  const isXL = useMediaQuery({ minWidth: 1280 });

  return (
    <div
      className="
      h-screen bg-primary overflow-hidden text-secondary 
      grid 
      grid-cols-[minmax(50px,200px)_minmax(300px,1200px)_minmax(100px,300px)] 
      max-[1280px]:grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] navlar 
    "
    >
      {user ? <Nav user={user} /> : <PageLoader />}
      {user ? <Main user={user} /> : <PageLoader />}
      {isXL && (user ? <Aside /> : <PageLoader />)}
    </div>
  );
};

export default Feed;
