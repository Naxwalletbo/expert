<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import AOS from "aos";


onMount(() => {
  
  AOS.init();
});
</script>

<section class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-8 md:py-12 xl:py-18 bg-[#181d20]x" data-aos="fade-up">
    <div class="">
      <h1 class="font-medium text-xl sm:text-2xl md:text-3xl text-center" data-aos="fade-up">Select a service</h1>
      <div class="mt-10 max-sm:flex max-sm:flex-col justify-center gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
        <a href="https://trade.expertrader.org" class="">
          <div
            class="border p-8 flex flex-col justify-center gap-6 items-center border border-gray-800 hover:border-gray-600">
            <img src="./images/offer1.svg" alt="" data-aos="fade-up">
            <p class="font-medium text-xl">Investments</p>
          </div>
        </a>
        <a href="https://trade.expertrader.org" class="" data-aos="fade-up">
          <div
            class="border p-8 flex flex-col justify-center gap-6 items-center border border-gray-800 hover:border-gray-600">
            <img src="./images/offer2.svg" alt="">
            <p class="font-medium text-xl">Trading</p>
          </div>
        </a>
        <a href="https://trade.expertrader.org" class="" data-aos="fade-up">
          <div
            class="border p-8 flex flex-col justify-center gap-6 items-center border border-gray-800 hover:border-gray-600">
            <img src="./images/offer3.svg" alt="">
            <p class="font-medium text-xl">For beginners</p>
          </div>
        </a>
        <a href="https://trade.expertrader.org" class="" data-aos="fade-up">
          <div
            class="border p-8 flex flex-col justify-center gap-6 items-center border border-gray-800 hover:border-gray-600">
            <img src="./images/offer4.svg" alt="">
            <p class="font-medium text-xl">Partnership</p>
          </div>
        </a>
      </div>
    </div>
  </section>