// src/app/layout.jsx
import './globals.css';

export const metadata = {
  title: "Adnan's Portfolio",
  description: "Portfolio of Adnan Siddiqui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}