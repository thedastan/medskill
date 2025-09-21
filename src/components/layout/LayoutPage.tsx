"use client";
import React, { FC, ReactNode } from "react";
import scss from "../layout/LayoutPage.module.scss";
// import Header from "./header/Header";
import Footer from "./footer/Footer";
import Modal from "../modal/Modal";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  return (
    <div className={scss.LayoutPage}>
      
      <main>{children}</main>
      <Footer />
      <Modal/>
    </div>
  );
};

export default LayoutPage;
