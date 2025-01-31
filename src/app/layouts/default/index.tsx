"use client";
import React, { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col justify-start">
      {/* Header */}
      <header
        className={`sticky top-0 z-10 flex p-4 bg-orange-300 items-center  transition-all duration-300 ease-in-out ${
          sidebarOpen ? "pl-72" : "pl-20"
        }`}
      ></header>
      <main
        className={`flex-1  transition-all duration-300 ease-in-out ${
          sidebarOpen ? "ml-72" : "ml-20"
        }`}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        className={`relative mt-auto bg-teal-300 p-4 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "pl-72" : "pl-20"
        }`}
      >
        {/* Placeholder for footer content */}
      </footer>
    </div>
  );
}
