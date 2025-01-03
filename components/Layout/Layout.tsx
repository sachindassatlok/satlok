import Header from '../Header/Header';
import FooterV2 from '../Footer/FooterV2';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <FooterV2 />
    </div>
  );
};

export default Layout;
