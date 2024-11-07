<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import AOS from "aos";


onMount(() => {
  
  AOS.init();
});
</script>

<section class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-8 md:py-12 xl:py-18 bg-[#181d20]x" data-aos="fade-up">
    <div
      class="xl:mx-16x bg-gradient-to-l from-[#000733] via-[#002066] to-[#000733] p-6 xl:p-10 max-sm:divide-y sm:divide-x divide-blue-900 flex max-sm:flex-col max-sm:gap-8 sm:justify-between">
      <div class="" data-aos="fade-up">
        <h1 class="text-xl lg:text-2xl">Affiliate program in Expert Trader</h1>
        <div class="flex max-sm:flex-col justify-between sm:mt-8">
          <div class="max-sm:mt-6">
            <p class="text-gray-200">Paid in the last year:</p>
            <p class="text-3xl lg:text-4xl font-medium">$489,582,328,993</p>
          </div>
          <div class="max-sm:mt-6">
            <p class="text-gray-200">Partners:</p>
            <p class="text-3xl lg:text-4xl font-medium text-blue-300">2,964,762</p>
          </div>
        </div>
      </div>
      <div class="max-sm:pt-8 sm:pl-8" data-aos="fade-up">
        <p class="text-gray-100 text-[14px] borderx">We guarantee flexible conditions and an individual approach to
          each of our partners.</p>
        <p class="text-gray-100 text-lg mt-6 md:mt-10">Become a part of our team and earn with us!</p>
        <div class="mt-6">
          <a href="https://trade.expertrader.org" class="bg-[#0066ff] hover:bg-blue-700 hover:bg-blue-700 px-4 py-3 w-[180px]" data-aos="fade-up">Become a partner</a>
        </div>
      </div>
    </div>
  </section>
