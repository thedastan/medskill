"use client";
import { PAGE } from "@/config/pages/public-page.config";

import { FaHdd, FaTags, FaWindows } from "react-icons/fa";
import { GiProcessor, GiVideoCamera } from "react-icons/gi";
import { MdMemory, MdMonitor } from "react-icons/md";

export const navbar = [
  {
    href: PAGE.HOME,
    name: "Главное",
  },
  {
    href: PAGE.ABOUT,
    name: "О нас",
  },
  {
    href: PAGE.DELIVERY,
    name: "Доставка",
  },
  {
    href: PAGE.GARANTEE,
    name: "Гарантия",
  },
  {
    href: PAGE.SERVICE,
    name: "Сервис",
  },
  {
    href: PAGE.CONTACT,
    name: "Контакты",
  },
];

export const filters = [
  {
    icon: <FaTags />,
    title: "Бренд",
    options: ["Другой", "Acer", "Apple", "Ardor", "Asus"],
  },
  {
    icon: <MdMonitor />,
    title: "Диагональ экрана",
    options: ["17.3", "16.1", "16", "15.6", "15.3"],
  },
  {
    icon: <GiProcessor />,
    title: "Тип процессора",
    options: [
      "Intel Pentium",
      "Intel Core Ultra 9",
      "Intel Core Ultra 7",
      "Intel Core Ultra 5",
      "Intel Core i9",
    ],
  },
  {
    icon: <MdMemory />,
    title: "Объём оперативной памяти",
    options: ["4096 МБ", "6144 МБ", "8192 МБ", "12288 МБ", "16384 МБ"],
  },
  {
    icon: <GiVideoCamera />,
    title: "Чипсет видео",
    options: [
      "RADEON RX7700S",
      "RADEON RX6550M",
      "RADEON R7 M445",
      "RADEON GRAPHICS",
      "RADEON 610M",
    ],
  },
  {
    icon: <FaHdd />,
    title: "Объём жесткого диска",
    options: [
      "8000 Гб SSD",
      "4000 Гб SSD",
      "2000 Гб SSD",
      "1000 ГБ HDD + 256 ГБ SSD",
      "1000 ГБ HDD + 128 ГБ SSD М.2",
    ],
  },
  {
    icon: <FaWindows />,
    title: "Предустановленная ОС",
    options: ["Ubuntu", "MS Windows 11", "MS Windows 10", "MacOS", "DOS"],
  },
];
