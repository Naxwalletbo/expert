<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import AOS from "aos";


onMount(() => {
  
  AOS.init();
});
</script>

<section
    class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-12 md:py-14 xl:py-18 xl:mt-20 bg-[#181d20]x bg-[url(/images/advantages_bg.jpg)] bg-center" data-aos="fade-up">
    <h1 class="font-medium text-xl sm:text-2xl md:text-3xl text-center">Our guarantees</h1>
    <div class="flex  justify-center mt-6 lg:mt-10">
      <a href="https://trade.expertrader.org" class="bg-[#0066ff] hover:bg-blue-700 px-6 py-3 text-center">Join</a>
    </div>
    <div class="mt-10 grid grid-cols-2 md:grid-cols-5 justify-center lg:items-center max-md:gap-4">

      <a href="https://trade.expertrader.org" class="max-lg:order-2">
        <div class="text-center flex flex-col justify-center gap-2 items-center">
          <img src="./images/advantage3.svg" alt="">
          <p class="text-gray-300">In business since <span
              class="font-medium text-lg lg:text-2xl text-white">2006</span></p>
        </div>
      </a>
      <a href="https://trade.expertrader.org" class="max-lg:order-5">
        <div class="text-center flex flex-col justify-centerx gap-2 items-center">
          <img src="./images/advantage4.svg" alt="">
          <p class="text-gray-300">Regulated by the international commission SEC since <span
              class="font-medium text-lg lg:text-2xl text-white"> 2016</span> </p>
        </div>
      </a>

      <a href="https://trade.expertrader.org" class="lg:border lg:border-gray-500 lg:py-8 lg:px-2 max-lg:order-1 max-lg:col-span-2">
        <div class="text-center flex flex-col justify-center gap-2 items-center">
          <img src="./images/advantage5.svg" alt="">
          <p class="text-gray-300">Compensation fund: up to <span
              class="font-medium text-lg lg:text-2xl text-white">€20,000</span> for each client</p>
        </div>
      </a>
      <a href="https://trade.expertrader.org" class="max-lg:order-3">
        <div class="text-center flex flex-col justify-centerx gap-2 items-center">
          <img src="./images/advantage1.svg" alt="">
          <p class="text-gray-300"> <span class="font-medium text-lg lg:text-2xl text-white borderx">18
            </span>professional awards
          </p>
        </div>
      </a>
      <a href="https://trade.expertrader.org" class="max-lg:order-4">
        <div class="text-center flex flex-col justify-centerx gap-2 items-center">
          <img src="./images/advantage2.svg" alt="">
          <p class="text-gray-300"><span class="font-medium text-lg lg:text-2xl text-white">750,000 </span>clients</p>
        </div>
      </a>


    </div>
  </section>