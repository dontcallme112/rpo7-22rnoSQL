export default function NewsSingle({ imgNews, title, desc }) {
    return (
        <div className='flex gap-20'>
            <img className='w-[48%]' src={ imgNews } alt="" />
            <div className='flex flex-col gap-6 items-start'>
              <h1 className='font-bold text-xl'>{ title }</h1>
              <p className='text-slate-600'>{ desc }</p>
              <button className='border border-green-700 p-3 rounded-full text-green-700 font-bold transition-all hover:bg-green-700 hover:text-white'>
                <span>Подробнее</span>
              </button>
            </div>
          </div>
    )
}