import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoFolderSharp } from "react-icons/io5";
import { BiTask, BiStoreAlt } from "react-icons/bi";
import { GiNewBorn } from "react-icons/gi";
import { SiAffinitydesigner } from "react-icons/si";
function Topbar() {
  return (
    <div className="topBar">
      <div className="topTitle">
        <h4>Task Management</h4>
      </div>
      <div className="pages">
        <h3>Board</h3>
        <div className="pageTitle">
          <IoFolderSharp className="icon" />
          <button>Folders</button>
        </div>
        <div className="pageTitle">
          <AiOutlineFundProjectionScreen className="icon" />
          <button>Projects</button>
        </div>
        <div className="pageTitle">
          <BiTask className="icon" />
          <button>Tasks</button>
        </div>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <div className="pageTitle">
          <GiNewBorn className="icon" />
          <button>New Feature</button>
        </div>
        <div className="pageTitle">
          <BiStoreAlt className="icon" />
          <button>Marketing</button>
        </div>
        <div className="pageTitle">
          <SiAffinitydesigner className="icon" />
          <button>Design</button>
        </div>
      </div>
      <div className="github">
        <a href="https://github.com/1sahinomer1">
          <AiFillGithub size={25} color={"613bff"} />
        </a>
      </div>
    </div>
  );
}

export default Topbar;
