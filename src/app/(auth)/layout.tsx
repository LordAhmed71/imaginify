import { IRootLayout } from "@/types";

const Layout = ({ children }: IRootLayout) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
