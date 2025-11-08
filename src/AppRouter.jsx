import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Explore from "./Explore";
import Dashboard from "./Dashboard";
import Account from "./Account";

const AppRouter = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Router>
        <Header />
        <main className="flex-1 px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
