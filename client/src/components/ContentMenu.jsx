import { Link } from 'react-router-dom';
import { categories } from '../constants';

const ContentMenu = () => {
  return (
    <ul className="flex flex-col gap-y-4 mt-10 w-[217px]">
      {categories.map(category => (
        <li key={category} className="link-text">
          <Link to={`products/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ContentMenu;
