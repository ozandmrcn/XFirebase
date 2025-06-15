import moment from "moment/moment";
import { getUserName } from "./../../utils/helpers";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  let date = tweet.createdAt?.toDate();

  date = moment(date).fromNow();

  return (
    <div className="flex gap-2 items-center whitespace-nowrap text-gray-400">
      <p className="text-white font-semibold">{tweet.user.name}</p>

      <p className="text-sm">{getUserName(tweet.user.name)}</p>

      <p className="text-sm">{date}</p>

      {tweet.isEdited && (
        <div>
          <span>
            <MdEdit className="md:hidden" />
          </span>
          <span className="max-md:hidden text-sm">• edited</span>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
