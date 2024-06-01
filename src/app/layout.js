import "./global.scss";
import MainLayout from "@/components/mainLayout";

export const metadata = {
  title: "Jotham Teshome"
};

export default function RootLayout({ children }) {
  return <MainLayout>{children}</MainLayout>
};
