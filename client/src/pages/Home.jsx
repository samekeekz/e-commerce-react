import Header from '../sections/Header';
import Sales from '../sections/Sales';
import Sidebar from '../sections/Sidebar';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Sales />
      <div className="mt-8 flex justify-between items-start">
        <Sidebar />
        <div className="pl-10">
          <Sales />
        </div>
      </div>
    </div>
  );
};

export default Home;
