import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default function MainLayout() {
  return (
    <div className="bg-main-bg min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
