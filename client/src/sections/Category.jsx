import { useContext } from 'react';
import { arrayOfCategories } from '../constants';
import { Context } from '../components/context/Context';
import Checkbox from '../components/UI/Checkbox';

const Category = () => {
  const { filter, setFilter } = useContext(Context);

  const handleCategoryChange = selectedCategory => {
    setFilter(prevFilter => {
      if (prevFilter.category.includes(selectedCategory)) {
        // If the category is already in the array, remove it
        return {
          ...prevFilter,
          category: prevFilter.category.filter(category => category !== selectedCategory),
        };
      } else {
        // If the category is not in the array, add it
        return {
          ...prevFilter,
          category: [...prevFilter.category, selectedCategory],
        };
      }
    });
  };
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Category</h2>
      {arrayOfCategories.map(({ text, value, name }) => (
        <Checkbox
          key={value}
          text={text}
          value={value}
          name={name}
          onChange={event => handleCategoryChange(event.target.value)}
        />
      ))}
    </div>
  );
};

export default Category;
