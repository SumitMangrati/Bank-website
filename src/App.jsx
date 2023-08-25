import React from 'react';
import { Navbar , Hero ,Stats ,Billing ,Buisness , CardDeal , Testimonials , Clients , CTA ,Footer } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className='xl:max-w-[1280px] w-full'>
          < Navbar />
        </div>
      </div>
        <div className='bg-primary flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            < Hero />
          </div>
        </div>

        <div className='bg-primary sm:px-16 px-6 flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            < Stats />
            < Buisness />
            < Billing />
            < CardDeal /> 
            < Testimonials />
            < Clients /> 
            < CTA />
            < Footer /> 
          </div>
        </div>
      </div>
  )
}

export default App
