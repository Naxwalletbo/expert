<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import AOS from "aos";


onMount(() => {
  
  AOS.init();
});
</script>
<footer class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-8 md:py-12 xl:py-18 bg-black" data-aos="fade-up">
    <div class="md:flex items-start justify-between gap-10">
      <div class="md:w-1/3 lg:w-1/2x borderx">
        <h1 class="text-gray-400">We're passionate about creating unforgettable moments. Our platform provides a
          seamless and transparent trading experience, with a range of exciting crypto and fiat currency
        </h1>
      </div>
      <div class="max-sm:grid max-sm:grid-cols-2 sm:flex justify-between md:w-2/3 lg:w-1/2">
        <div class="max-md:mt-10">
          <h1 class="text-lg font-medium">Quick links</h1>
          <ul class="mt-4 text-gray-400 flex flex-col gap-2">
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Trade</a>
            </li>
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Market</a>
            </li>
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Crypto currency</a>
            </li>
          </ul>
        </div>
        <div class="max-md:mt-10">
          <h1 class="text-lg font-medium">Company</h1>
          <ul class="mt-4 text-gray-400 flex flex-col gap-2">
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Home</a>
            </li>
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">About</a>
            </li>
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div class="max-md:mt-10">
          <h1 class="text-lg font-medium">Legal</h1>
          <ul class="mt-4 text-gray-400 flex flex-col gap-2">
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Trade policy</a>
            </li>
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Terms of service</a>
            </li>
            <li>
              <a href="https://trade.expertrader.org" class="hover:text-blue-600 hover:underline">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="mt-10 mb-4 border border-gray-600">
    <div class="flex max-sm:flex-col-reverse max-sm:gap-4 justify-between">
      <div class="text-gray-500">
        © 2006 — 2024 Expert Trader Ltd
      </div>
      <div class="flex gap-6">
        <img src="/images/insta.svg" alt="" class="">
        <img src="/images/fb.svg" alt="" class="">
        <img src="/images/YT.svg" alt="" class="">
        <img src="/images/telegram.svg" alt="" class="">
      </div>
    </div>
  </footer>