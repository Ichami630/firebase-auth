import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-1 min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white  p-4 overflow-y-auto hide-scrollbar">
        <nav>
          <NavLink
            to="/"
            className="flex items-center gap-2 mb-6"
          >
            <img src="/react.svg" alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="hidden lg:block text-lg font-bold">React</span>
          </NavLink>

          {/* Insert <SidebarMenu /> or similar here */}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">

        {/* Header */}
        <header className="bg-white px-6 py-4 shadow-sm sticky top-0 z-10">
          {/* Replace with <DashboardHeader /> */}
          <h1 className="text-xl font-semibold text-gray-800">Dashboard Header</h1>
        </header>

        {/* Main Content */}
        <main className="flex-grow overflow-y-auto p-4">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="shrink-0 h-12 bg-white px-6 flex items-center justify-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} React. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
