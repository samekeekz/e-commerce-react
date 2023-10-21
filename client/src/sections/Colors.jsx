import Radio from '../components/UI/Radio';

const Colors = () => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Colors</h2>
      <Radio text={'All'} name={'Color'} color={'red'} />
      <Radio text={'White'} name={'Color'} />
      <Radio text={'Black'} name={'Color'} />
      <Radio text={'Green'} name={'Color'} />
      <Radio text={'Yellow'} name={'Color'} />
      <Radio text={'Red'} name={'Color'} />
      <Radio text={'Purple'} name={'Color'} />
      <Radio text={'Grey'} name={'Color'} />
    </div>
  );
};

export default Colors;
