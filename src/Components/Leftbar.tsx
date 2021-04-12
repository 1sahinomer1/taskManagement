import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineFundProjectionScreen,
  AiFillCloseCircle,
} from "react-icons/ai";
import { IoFolderSharp } from "react-icons/io5";
import { BiTask, BiStoreAlt } from "react-icons/bi";
import { GiNewBorn } from "react-icons/gi";
import { SiAffinitydesigner } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { motion as m } from "framer-motion";
function Leftbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="hamburgerIcon">
        <FaBars onClick={showSidebar} className="hamburger" />
      </div>
      <nav className={sidebar ? "left-menu active" : "left-menu"}>
        <div className="leftBar">
          <div className="leftTop">
            <h4>Task Management</h4>
            <div className="closeIcon">
              <AiFillCloseCircle onClick={showSidebar} size={20} />
            </div>
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
      </nav>
    </>
  );
}

export default Leftbar;
