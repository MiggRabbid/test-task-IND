import { getData } from '@/api/api';
import Slider from '@/features/slider/Slider';

const Home = async () => {
  const response = await getData();

  return (
    <main className="w-full h-full">
      <div className="text-2xl md:text-3xl lg:text-5xl lg:grid lg:grid-cols-4 mx-4 lg:py-4 lg:border-y border-border">
        <div className="p-0 lg:px-4 border-b-[1px] lg:border-b-0">
          <p className="text-[40px] leading-[44px] text-project-theme-accent py-2 lg:p-0">
            1.0
          </p>
        </div>
        <div className="lg:col-span-3 p-0 lg:px-4 lg:pl-0">
          <h2 className="text-[40px] leading-[44px] text-project-theme-accent py-2 lg:p-0">
            Наши услуги
          </h2>
        </div>
      </div>

      <Slider slides={response} />
    </main>
  );
};

export default Home;
