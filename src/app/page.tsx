import { getData } from '@/api/api';
import Slider from '@/features/slider/Slider';

const Home = async () => {
  const response = await getData();

  return (
    <div>
      <main>
        <Slider slides={response} />
      </main>
    </div>
  );
};

export default Home;
