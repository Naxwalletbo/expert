<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import AOS from "aos";


onMount(() => {
  
  AOS.init();
});
</script>

<section
      class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-8 md:py-12 xl:py-18 bg-[#181d20]x  borderx">
      <div class="text-center">
        <h2 class="font-medium text-xl sm:text-2xl md:text-3xl" data-aos="fade-up">Choose an investment option</h2>
        <div class="mt-10 flex max-lg:flex-col gap-6 xl:px-28x borderX">
          <div
            class="flex flex-col justify-center gap-8 border border-gray-800 hover:border-gray-600 py-10 px-8 w-full xl:w-1/2">
            <div class="flex justify-center" data-aos="fade-up">
              <img src="/images/investment1.svg" alt="">
            </div>
            <div class="" data-aos="fade-up">
              <h1 class="font-medium text-xl">Copy successful strategies</h1>
              <p class="text-gray-400 mt-6">Rating of traders with consistent profit rate, their trades will be copied
                to your account automatically</p>
            </div>
            <div class="">
              <a href="https://trade.expertrader.org" class="bg-[#0066ff] hover:bg-blue-700 hover:bg-blue-700 px-4 py-3 text-center">See rating</a>
            </div>
          </div>
          <div
            class="flex flex-col justify-center gap-8 border border-gray-800 hover:border-gray-600 py-10 px-8 w-full xl:w-1/2" data-aos="fade-up">
            <div class="flex justify-center">
              <img src="/images/investment2.svg" alt="">
            </div>
            <div class="">
              <h1 class="font-medium text-xl">Margin trade with low fees</h1>
              <p class="text-gray-400 mt-6">Trade wide range of markets with our award-wining trading platform. Benefit from low fees, fast order execution, and advanced features to increase your profitability.</p>
            </div>
            <div class="">
              <a href="https://trade.expertrader.org" class="bg-[#0066ff] hover:bg-blue-700 hover:bg-blue-700 px-4 py-3 text-center">Start trading</a>
            </div>
          </div>
        </div>
      </div>
    </section>