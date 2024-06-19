import React from 'react'

 const Pricing = () => {
  return (
    <div class='mt-32'>
      <div class="text-3xl font-semibold">Pricing</div>
      <div class="p-1 font-light ">
        <p class="inline-block text-xl">4 out of 5 professionals said that intervue was ‘<strong>not that expensive</strong>’.</p>
        <p class="text-xl">Don't be that one person, checkout our plans</p>
      </div>

    <div class="lg:justify-center lg:flex">

      <div class="flex flex-row p-2 mt-4">
        <div class="bg-light_pink flex flex-row">
          <img class="md:mt-6 md:mr-2 ml-8 mt-5 w-5 h-5 lg:mt-3"  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64acff23b879772c572488ed_on-demand.svg" alt=""></img>
          <p class="lg:pr-4 mt-2 font-semibold mb-4 md:ml-0">Outsource interviews</p>
        </div>

        <div class="bg-light_pink2 flex flex-row">
          <img class="md:mt-6 md:mr-2 ml-8 mt-5 w-5 h-5 lg:mt-3"  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64acff233343f7de91af31cb_live-interviews.svg" alt=""></img>
          <p class="lg:pr-4 mt-2 font-semibold mb-4 md:ml-0">Evaluation Platform</p>
        </div>


      </div>
      </div>

      {/* <div class="flex justify-start ml-1 mt-2">
        <p class="text-xl font-semibold">Outsource interviews</p>
      </div> */}

      
      




    </div>
  )
}

export default Pricing;
