import React, { Children } from "react";
import DarkmodeToggle from "./DarkmodeToggle";
import NavBarImpl from "./NavBarImpl";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout:React.FC <LayoutProps>= ({children}) => {
    return(
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 shadow p-4">
        <h1 className="text-xl font-bold">Niroshan</h1>
        <div className="flex p-2">
          <DarkmodeToggle />
          <NavBarImpl />
        </div>
      </div>
      {/* Main Content */}
      <main className="w-full h-full min-h-screen container mx-auto p-2">
        {children}
      </main>
    </div>
    );
};

export default Layout;