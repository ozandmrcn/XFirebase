import { FaDoorOpen } from "react-icons/fa";
import { navSections } from "../../utils/constants";
import { getUserName } from "../../utils/helpers";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import LoadingModal from "./../../components/Modal/LoadingModal";
import Loader from "./../../components/Loader/index";

const Nav = ({ user }) => {
  const [signOutLoading, setSignOutLoading] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-between items-end px-2 py-4 cavs">
        <div className="flex flex-col justify-center self-center navs">
          {/* Links */}
          <img src="x-logo.webp" alt="x-logo" className="w-14 mb-4 xlogo" />

          {navSections.map((item, key) => (
            <div
              key={key}
              className="flex items-center gap-3 text-2xl md:text-xl p-3  cursor-pointer rounded-lg transition hover:bg-tw-gray"
            >
              {item.icon}

              <span className="whitespace-nowrap max-md:hidden">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* User */}

        <div className="flex flex-col gap-y-2 items-center self-center">
          <img
            src={user?.photoURL}
            className="rounded-full w-13 h-13 max-md:max-w-8 max-md:max-h-8 mb-3 max-md:mb-1"
          />
          <div className="flex flex-col items-center">
            <p className="max-md:hidden text-sm">{user?.displayName}</p>
            <p className="max-md:hidden text-sm text-zinc-400">
              {getUserName(user?.displayName)}
            </p>
          </div>
          <button
            onClick={() => {
              try {
                setSignOutLoading(true);
                signOut(auth);
                toast.info("Signed out successfully");
              } catch (error) {
                console.error(error);
              } finally {
                setSignOutLoading(false);
              }
            }}
            className="text-xl cursor-pointer"
            title="Signout"
          >
            <FaDoorOpen />
          </button>
        </div>
      </div>

      <LoadingModal isOpen={signOutLoading}>
        <Loader designs={["size-20"]} />
      </LoadingModal>
    </>
  );
};

export default Nav;
