import ArticlesProvider from "./contexts/ArticlesContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ArticlesProvider>{children}</ArticlesProvider>;
}
