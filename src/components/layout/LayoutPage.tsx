"use client";
import React, { FC, ReactNode } from "react";
import scss from "../layout/LayoutPage.module.scss";
// import Header from "./header/Header";
import Footer from "./footer/Footer";
import Modal from "../pages/modal/Modal";
import ScrollTracker from "../analytics/ScrollTracker";
import StickyCta from "./StickyCta";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  return (
    <div className={scss.LayoutPage}>
      <main className="pb-[88px] md:pb-0">{children}</main>
      <Footer />
      <Modal />
      <StickyCta />
      <ScrollTracker />
    </div>
  );
};

export default LayoutPage;
