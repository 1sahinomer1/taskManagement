import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoFolderSharp } from "react-icons/io5";
import { BiTask, BiStoreAlt } from "react-icons/bi";
import { GiNewBorn } from "react-icons/gi";
import { SiAffinitydesigner } from "react-icons/si";
import { motion as m } from "framer-motion";

function Topbar() {
  return (
    <div className="topBar">
      <div className="topTitle">
        <h4>Task Management</h4>
      </div>
      <div className="pages">
        <h3>Board</h3>
        <m.div
          className="pageTitle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoFolderSharp className="icon" />
          <button>Folders</button>
        </m.div>
        <m.div
          className="pageTitle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineFundProjectionScreen className="icon" />
          <button>Projects</button>
        </m.div>
        <m.div
          className="pageTitle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BiTask className="icon" />
          <button>Tasks</button>
        </m.div>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <m.div
          className="pageTitle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GiNewBorn className="icon" />
          <button>New Feature</button>
        </m.div>
        <m.div
          className="pageTitle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BiStoreAlt className="icon" />
          <button>Marketing</button>
        </m.div>
        <m.div
          className="pageTitle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiAffinitydesigner className="icon" />
          <button>Design</button>
        </m.div>
      </div>
      <m.div
        className="github"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://github.com/1sahinomer1">
          <AiFillGithub size={25} color={"613bff"} />
        </a>
      </m.div>
    </div>
  );
}

export default Topbar;
