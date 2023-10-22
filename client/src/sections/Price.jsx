import Radio from '../components/UI/Radio';
import { arrayOfPrices } from '../constants';

const Price = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Price</h2>
      <Radio
        key="All"
        text="All"
        value="100000"
        name="Price"
        defaultChecked
        onChange={event => setFilter({ ...filter, price: event.target.value })}
      />
      {arrayOfPrices.map(({ text, value, name }) => (
        <Radio
          key={value}
          text={text}
          value={value}
          name={name}
          onChange={event =>
            setFilter({ ...filter, price: event.target.value })
          }
        />
      ))}
    </div>
  );
};

export default Price;
