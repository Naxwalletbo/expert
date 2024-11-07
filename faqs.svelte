<script lang="ts">
  import { baseUrl } from "$lib/baseUrl";
  import { onMount } from "svelte";
  import { AccordionItem, Accordion } from "flowbite-svelte";
  /**
   */
  interface FaqData {
    content: {
      heading: string;
      subheading: string;
      image_light: string;
      image_dark: string;
    };
    faqs: { question: string; answer: string }[];
  }
  // let faqs: FaqData;
  // onMount(async () => {
  //   try {
  //     const faqResponse = await fetch(`${baseUrl}/api/faqs`);
  //     faqs = (await faqResponse.json()).data;
  //     console.log(faqs);
  //     console.log(data.content.heading);
  //   } catch (error) {
  //     console.error("Error fetching FAQs:", error);
  //   }
  // });
  export let data: FaqData;

  // console.log({faqData: data});

  // @ts-ignore
  import AOS from "aos";

  onMount(() => {
    AOS.init();
  });
</script>

<section
  class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-8 md:py-12 xl:py-18 bg-[#181d20]x"
  data-aos="fade-up"
>
  {#if data}
    <div class="">
      <h2
        class="font-medium text-xl sm:text-2xl md:text-3xl max-lg:text-center"
      >
        {data.content.heading}
      </h2>
      <p class="font-medium text-sm text-gray-400 max-lg:text-center">
        {data.content.subheading}
      </p>
      <div class="mt-4 flex max-lg:flex-col gap-12 lg:gap-8 items-center">
        <div class="lg:w-2/3 space-y-8">
          <Accordion flush>
            {#each data.elements as faq, index (index)}
              <AccordionItem activeClass="bg-gray-200">
                <span slot="header" class="text-gray-400">{faq.question}</span>
                <p class="mb-2 text-gray-100 dark:text-gray-400">
                  {faq.answer}
                </p>
              </AccordionItem>
            {/each}
          </Accordion>
        </div>
        <div class="flex flex-col gap-8 lg:gap-12 lg:w-1/3">
          <div
            class="md:block hidden max-lg:order-2 h-2/3x bg-[url(./images/finance-banner.jpg)]x bg-centerx"
          >
            <img src={data.content.images.image_light} alt="" />
          </div>
          <div class="space-y-8 flex flex-col justify-center">
            <a
              href="https://trade.expertrader.org"
              class="bg-[#0066ff] hover:bg-blue-700 px-6 py-3 lg:w-full text-center w-[180px]"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </div>
  {/if}
</section>
