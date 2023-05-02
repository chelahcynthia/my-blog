import "./globals.css";
import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Cynthia's Blog",
  description: "Created by Chelah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-500" >
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
