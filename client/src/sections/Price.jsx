import { useContext } from 'react';
import ReactSlider from 'react-slider';
import Input from '../components/UI/Input';
import { Context } from '../components/context/Context';

const Price = () => {
  const { filter, setFilter } = useContext(Context);

  const handleClick = values => {
    setFilter({ ...filter, priceMin: values[0], priceMax: values[1] });
  };
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Price</h2>

      <div className="w-[90%] pr-[15px] pb-[15px]">
        <div className=" flex items-center justify-between">
          <Input id="min" value={filter.priceMin} readOnly />
          <Input id="max" value={filter.priceMax} readOnly />
        </div>
        <div className="mt-7">
          <ReactSlider
            className="slider"
            thumbClassName="thumb"
            trackClassName="track"
            value={[filter.priceMin, filter.priceMax]}
            onChange={values => handleClick(values)}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            // ariaValuetext={state => `Thumb value ${state.valueNow}`}
            // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling={false}
            minDistance={0}
            step={10}
            min={0}
            max={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
