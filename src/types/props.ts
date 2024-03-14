interface IAuthLayout {
  children: React.ReactNode;
}
interface IRootLayout {
  children: React.ReactNode;
}
interface IHeader {
  title: string;
  subtitle?: string;
}

export type { IAuthLayout, IRootLayout, IHeader };
