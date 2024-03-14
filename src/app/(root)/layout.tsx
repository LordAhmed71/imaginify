import { IAuthLayout } from "@/types";

const Layout = ({ children }: IAuthLayout) => {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
