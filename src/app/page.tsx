import { About } from './components/About/About';
import { Main } from './components/Main/Main';
import { Pricing } from './components/Pricing/Pricing';
import { SideElement } from './components/SideElement/SideElement';

export default function Home() {
  return (
    <div className='px-[150px]'>
      <Main />
      <SideElement />
      <SideElement right />
      <About />
      <Pricing />
    </div>
  );
}
