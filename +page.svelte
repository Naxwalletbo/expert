<script lang="ts">
  import Affiliate from "$lib/Components/Homepage/affiliate.svelte";
  import Subscribe from "$lib/Components/Homepage/subscribe.svelte";
  import ChooseInvestments from "$lib/Components/Homepage/chooseInvestments.svelte";
  import Faqs from "$lib/Components/Homepage/faqs.svelte";
  import Guarantes from "$lib/Components/Homepage/guarantes.svelte";
  import Hero from "$lib/Components/Homepage/hero.svelte";
  import InsuredFunds from "$lib/Components/Homepage/insuredFunds.svelte";
  import Investments from "$lib/Components/Homepage/investments.svelte";
  import SelectServices from "$lib/Components/Homepage/selectServices.svelte";
  import type {PageData} from "$types";
  export let data: PageData;
  const secComponents = {
    faq: Faqs,
    // blog: Blog,
    insurance: InsuredFunds,
    subscribe: Subscribe,
  };
  // console.log({setcions:data.sections});
</script>

<div class="max-md:mt-28 md:mt-24">
  <Hero />
  <!-- <Investments /> -->
  <Affiliate />
  <ChooseInvestments />
  
  <SelectServices />
  <Guarantes />
  {#each Object.keys(data.sections) as secKey}
    <svelte:component this={secComponents[secKey]} data={data.sections[secKey]}/>
  {/each}
</div>
