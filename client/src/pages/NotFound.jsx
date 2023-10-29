import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="pt-[100px] h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-[110px] leading-[115px] font-medium tracking-[3.3px] font-inter mb-10">
        404 Not Found
      </h1>
      <p className="font-poppins leading-6 mb-20">
        Your visited page not found. You may go home page.
      </p>
      <Button>
        <Link to="/">Back to Home page</Link>
      </Button>
    </div>
  );
};

export default NotFound;
