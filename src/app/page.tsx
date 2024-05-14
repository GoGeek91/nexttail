"use client";
import React, { useState } from "react";
import { Input } from "./modaldemo/input";

const Drawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white p-4 transition-transform duration-300 transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Drawer Content</h2>
        <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
          Close
        </button>
      </div>
      <p className="mt-2 text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sunt porro aut aspernatur,
        possimus hic quisquam neque. Eius facere molestiae repellendus, libero hic enim id, nulla placeat
        laborum harum possimus?
      </p>
      <div className="">
        <Input placeholder="hello name" className="text-black" />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={toggleDrawer}>
        {isDrawerOpen ? "Close Drawer" : "Open Drawer"}
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default App;
