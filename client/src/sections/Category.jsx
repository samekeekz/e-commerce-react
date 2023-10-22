import Radio from '../components/UI/Radio';
import { arrayOfCategories } from '../constants';

const Category = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Category</h2>
      <Radio
        key="All"
        text="All"
        value="All"
        name="Category"
        defaultChecked
        onChange={event =>
          setFilter({ ...filter, category: event.target.value })
        }
      />
      {arrayOfCategories.map(({ text, value, name }) => (
        <Radio
          key={value}
          text={text}
          value={value}
          name={name}
          onChange={event =>
            setFilter({ ...filter, category: event.target.value })
          }
        />
      ))}
    </div>
  );
};

export default Category;
