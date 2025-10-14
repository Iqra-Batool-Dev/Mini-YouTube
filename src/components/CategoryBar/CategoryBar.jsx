
function CategoryBar({selectedCategory , onselect}) {
  const categories = [
  'All',
  'Music',
  'Sports',
  'Gaming',
  'News',
  'Movies',
  'Technology',
  'Education',
  'Fashion',
  'Travel',
  'Food',
  'Science',
];

  return (
    <div  className='w-full bg-white p-2 flex flex-row flex-nowrap gap-4 items-center border-b-1  border-gray-300 overflow-x-scroll  '>
      {categories.map((category , index)=>(
        <button
        key={index}
        onClick={()=>onselect(category)}
        className={`text-[1rem] py-2 px-3  text-gray-900 border-none rounded-3xl  transition-all duration-200 ${selectedCategory === category ? ' bg-gray-300 ' : 'hover:bg-gray-300'}`}>
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryBar
