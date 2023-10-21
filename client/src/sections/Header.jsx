import Carousel from '../components/Carousel';
import ContentMenu from '../components/ContentMenu';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <section className="container">
      <Navbar />
      <div className="flex justify-between">
        <ContentMenu />
        <Carousel />
      </div>
    </section>
  );
};

export default Header;
