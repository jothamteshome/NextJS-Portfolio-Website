import "./global.css";
import MainLayout from "@/components/mainLayout";

export const metadata = {
  title: "Jotham Teshome",
  description: "Jotham Teshome's portfolio website to show off all the projects he's worked on. Build with Next.js, React, and Bootstrap",
  keywords: ['Next.js', 'React', 'Bootstrap', 'Javascript'],
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return <MainLayout>{children}</MainLayout>
};
