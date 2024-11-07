<script lang="ts">
  interface InsuredFundsData {
    content: {
      heading: string;
      images:{
        certificate: string;
      }
    };
    elements: {
      icon: string;
      text: string;
    }[]
  }
  export let data: InsuredFundsData;
  // console.log(data);
  import { onMount } from "svelte";
  // @ts-ignore
  import AOS from "aos";


onMount(() => {
  
  AOS.init();
});
</script>
<section class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-8 md:py-12 xl:py-18 bg-[#181d20]x" data-aos="fade-up">
    <div class="">
      <h2 class="font-medium text-xl sm:text-2xl md:text-3xl">{data.content.heading}</h2>
      <div class="mt-8 md:mt-12 xl:mt-16 flex max-lg:flex-col gap-10">
        <div class="lg:w-2/3">
          <!-- small screen -->
          <ul class="space-y-4 borderx lg:grid grid-cols-2 lg:justify-items-center lg:hidden">
            {#each data.elements as el}
            <li class="flex gap-4 block borderx lg:grid borderx">
              <img src={el.images.icon} alt="" class="">
              <p class="text-gray-200 font-[300]">{el.text}</p>
            </li>
            {/each}
          </ul>
          <div class="lg:grid grid-cols-2 gap-16 max-lg:hidden">
            {#each data.elements as el}
            <div class="grid gap-4 borderx">
              <img src={el.images.icon} alt="" class="">
              <p class="text-gray-200 font-[300] xl:pr-12">{el.text}</p>
            </div>
            {/each}
          </div>
          <div class="mt-10 max-lg:text-center">
            <a href="https://trade.expertrader.org" class="bg-[#0066ff] hover:bg-blue-700 px-4 py-3 text-center">Learn more</a>
          </div>
        </div>
        <div class="">
          <img src={data.content.images.certificate} alt="" class="animate-pulsex">
        </div>
      </div>
    </div>
  </section>