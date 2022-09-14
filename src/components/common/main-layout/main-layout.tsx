import { Header, Footer } from '../common';

const MainLayout = ({ children }: any): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
