import { IRootLayout } from "@/types/props";

const Layout = ({ children }: IRootLayout) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
