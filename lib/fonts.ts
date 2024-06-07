import localFont from "next/font/local";

export const josefinSans = localFont({
  src: [
    {
      path: "../public/font/JosefinSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
    {
      path: "../public/font/JosefinSans-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-josefin",
});

export const lato = localFont({
  src: "../public/font/Lato-Regular.ttf",
  variable: "--font-lato",
});
