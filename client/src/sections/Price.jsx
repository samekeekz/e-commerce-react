import Radio from '../components/UI/Radio';

const Price = () => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Price</h2>
      <Radio text={'All'} name={'Price'} />
      <Radio text={'$0 - $100'} name={'Price'} />
      <Radio text={'$100 - $1000'} name={'Price'} />
      <Radio text={'$1000 - $10000'} name={'Price'} />
      <Radio text={'$10000 - $100000'} name={'Price'} />
    </div>
  );
};

export default Price;
