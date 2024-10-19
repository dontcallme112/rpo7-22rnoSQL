import NewsSingle from "./NewsSingle"
import data from '../assets/data/news.json'

export default function News() {
  
    return (
        <section className='main__page flex justify-between gap-10'>
          <img className='h-[100vh]' src="../public/Starbucks_background.jpg.webp" alt="" />
          <div className='flex flex-col gap-10 p-10'>
        {data.map((item, index) => (
          <NewsSingle 
          imgNews={item.image}
          title={item.title}
          desc={item.desc}
      />
        ))}
            {/* <NewsSingle imgNews="../public/first_img.png.webp"
                title="Официальное Заявление Starbucks"
                desc="В Starbucks правда и прозрачность процессов необходимы для выполнения нашей миссии, выполнения наших обещаний и соблюдения наших ценностей. Поэтому, когда дезинформация о нашей компании распространяется с молниеносной скоростью во все более полярном мире, мы считаем крайне важным реагировать фактами и подтверждать нашу позицию по ключевым вопросам."
            />
            <NewsSingle imgNews="../public/second_img.jpg.webp"
                title="Факты о Starbucks в регионе Middle East"
                desc="Starbucks представлен в регионе Middle East с 1999 года на основании лицензионного соглашения с торговым партнером и лицензиатом MH Alshaya Co., частным кувейтским семейным бизнесом.

                    Чтобы узнать больше о Starbucks в регионе Middle East, нажмите на кнопку ниже."
                
            /> */}
          {/* <div className='flex gap-20'>
            <img className='w-[48%]' src="../public/first_img.png.webp" alt="" />
            <div className='flex flex-col gap-6 items-start'>
              <h1 className='font-bold text-xl'>Официальное Заявление <b>Starbucks</b></h1>
              <p className='text-slate-600'>В Starbucks правда и прозрачность процессов необходимы для выполнения нашей миссии, выполнения наших обещаний и соблюдения наших ценностей. Поэтому, когда дезинформация о нашей компании распространяется с молниеносной скоростью во все более полярном мире, мы считаем крайне важным реагировать фактами и подтверждать нашу позицию по ключевым вопросам.</p>
              <button className='border border-green-700 p-3 rounded-full text-green-700 font-bold transition-all hover:bg-green-700 hover:text-white'>
                <span>Подробнее</span>
              </button>
            </div>
          </div> */}
          {/* <div className='flex gap-20'>
            <img className='w-[48%]' src="../public/second_img.jpg.webp" alt="" />
            <div className='flex flex-col gap-6 items-start'>
              <h1 className='font-bold text-xl'>Факты о <b>Starbucks</b> в регионе <b>Middle East</b></h1>
              <p className='text-slate-600'>Starbucks представлен в регионе Middle East с 1999 года на основании лицензионного соглашения с торговым партнером и лицензиатом MH Alshaya Co., частным кувейтским семейным бизнесом.</p><br />
              <p className='text-slate-600'>Чтобы узнать больше о Starbucks в регионе Middle East, нажмите на кнопку ниже.</p>
              <button className='border border-green-700 p-3 rounded-full text-green-700 font-bold transition-all hover:bg-green-700 hover:text-white'>
                <span>Подробнее</span>
              </button>
            </div>
          </div> */}
        </div>
      </section>
    )
}