import "./globals.css";

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
      <body className="dark:bg-slate-800">
        {children}
        </body>
    </html>
  );
}
