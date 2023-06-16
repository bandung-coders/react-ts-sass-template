// Components
import { Sidebar, Navbar, Footer, Content } from "./components";

const MainLayout: React.FC = () => (
  <div className="app">
    <Sidebar />
    <div className="app__content">
      <Navbar />
      <Content />
    </div>
    <Footer />
  </div>
);

export default MainLayout;
