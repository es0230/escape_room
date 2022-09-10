
import { Header, Footer } from '../common';

const MainLayout = ({
  children
}: any) => (

  <>

    <Header />
    {children}

    <Footer />
  </>
);

export default MainLayout;
