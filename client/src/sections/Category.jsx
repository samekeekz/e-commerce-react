import Radio from '../components/UI/Radio';

const Category = () => {
  return (
    <div className="flex flex-col gap-y-[2px]">
      <h2 className="text-2xl mb-2 font-medium">Category</h2>
      <Radio text={'All'} name={'Category'} />
      <Radio text={"Woman's Fashion"} name={'Category'} />
      <Radio text={"Man's Fashion"} name={'Category'} />
      <Radio text={'Electronics'} name={'Category'} />
      <Radio text={'Home & Lifestyle'} name={'Category'} />
      <Radio text={'Medicine'} name={'Category'} />
      <Radio text={'Sports & Outdoor'} name={'Category'} />
      <Radio text={'Baby & Toys'} name={'Category'} />
      <Radio text={'Groceries & Pets'} name={'Category'} />
      <Radio text={'Health & Beauty'} name={'Category'} />
    </div>
  );
};

export default Category;
