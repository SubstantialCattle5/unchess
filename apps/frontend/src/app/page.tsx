"use client"
import { BentoBox } from "../components/BentoBox";
import { NavBar } from "../components/NavBar";
import Sidebar from "../components/SideBar";

export default function Index() {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full pb-10">
        <div className="">
          <NavBar />
        </div>
        <div className='w-full'>
          <BentoBox />
        </div>
      </div>

    </div>

  );
}
