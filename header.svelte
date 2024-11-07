<script>
  // @ts-nocheck
  import { baseUrl } from "$lib/baseUrl";
  import { onMount } from "svelte";

  const logo = baseUrl + "/assets/images/logoIcon/logo.png";

  $: sidebar = false;

  const show = () => {
    sidebar = !sidebar;
  };
  onMount(()=>{
    // setTimeout(() => {
      
    // }, 1000);

  });
</script>

<header class="text-gray-200 fixed left-0 z-50 right-0 top-0">
  <div class="lg:hidden flex justify-between px-6 bg-black py-3 shadow-mdx">
    <a href="#">
      <img src={logo} alt="" class="w-[120px] md:w-[160px]" />
    </a>
    <div id="google_translate_element_sm" class="google_translate_element">
      <!-- <div id="google_translate_element" class=""></div> -->
    </div>
    <button class="right-6 block md:hidden transition" on:click={show}>
      {#if !sidebar}
        <i class="fa-regular fa-bars" />
      {/if}
    </button>

    {#if sidebar}
      <div
        class="md:hidden text-white h-full overflow-y scroll-none fixed left-0 top-0 z-20 w-full bg-gradient-to-l from-[#000733] via-[#002066] to-[#000733]"
      >
        <button
          class="right-6 top-8 block md:hidden transition absolute"
          on:click={show}
        >
          <i class="fa-regular fa-close" />
        </button>
        <div
          class="top-0 left-0 bg-primary-900 flex flex-col gap-6 opaacity-0 p-10 w-full h-screen z-30"
        >
          <ul class="flex flex-col gap-4 2xl:gap-8 text-[14px] 2xl:text-[16px]">
            <li>
              <a
                href="https://trade.expertrader.org"
                class="hover:text-blue-500">Home</a
              >
            </li>
            <li>
              <a
                href="https://trade.expertrader.org"
                class="hover:text-blue-500">About</a
              >
            </li>
            <!-- <li>
              <a
                href="https://trade.expertrader.org"
                class="hover:text-blue-500">Blog/News</a
              >
            </li> -->
            <!-- <li>
              <a href="#">About the company</a>
            </li>
            <li>
              <a href="#">Patnership</a>
            </li> -->
          </ul>
          <div class="flex flex-col-reverse gap-4 2xl:gap-8 items-center">
            <a
              href="https://trade.expertrader.org/user/register"
              class="bg-[#0066ff] hover:bg-blue-700 px-4 py-2 text-[14px]"
            >
              Open an account
            </a>
            <div
              class="divide-x-2 divide-gray-500 font-[200] max-2xl:text-[14px]"
            >
              <a href="https://trade.expertrader.org" class="pr-1">Login</a>
              <a
                href="https://trade.expertrader.org/user/register"
                class="pl-2"
              >
                Register
              </a>
            </div>
          </div>
          
        </div>
      </div>
    {/if}
  </div>
  <!-- large -->
  <div
    class="max-lg:hidden bg-black py-4 md:px-12 lg:px-20 2xl:px-72 text-gray-200"
  >
    <div class="flex justify-between items-center">
      <div class="">
        <a href="#">
          <img src={logo} alt="" class="w-[100px] md:w-[160px]" />
        </a>
      </div>
      <div class="">
        <ul class="flex gap-4 2xl:gap-8 text-[14px] 2xl:text-[16px]">
          <li>
            <a
              href="https://trade.expertrader.org"
              class="hover:text-blue-500">Home</a
            >
          </li>
          <li>
            <a
              href="https://trade.expertrader.org"
              class="hover:text-blue-500">About</a
            >
          </li>
          <!-- <li>
            <a
              href="https://trade.expertrader.org"
              class="hover:text-blue-500">Blog/News</a
            >
          </li> -->
          <!-- <li>
              <a href="#">About the company</a>
            </li>
            <li>
              <a href="#">Patnership</a>
            </li> -->
        </ul>
      </div>
      <div class="flex gap-4 2xl:gap-8 items-center">
        <a
          href="https://trade.expertrader.org/user/register"
          class="bg-[#0066ff] hover:bg-blue-700 px-4 py-2 text-[14px]"
          >Open an account</a
        >
        <div class="divide-x-2 divide-gray-500 font-[200] max-2xl:text-[14px]">
          <a href="https://trade.expertrader.org" class="pr-1">Login</a>
          <a href="https://trade.expertrader.org/user/register" class="pl-2"
            >Register</a
          >
        </div>
        <div id="google_translate_element_lg" class="google_translate_element">
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  .google_translate_element {
    top: 10px;
    position: relative;
  }
  :global(.google_translate_element .goog-te-gadget span) {
    display: none;
  }
  :global(.google_translate_element .goog-te-gadget) {
    color: #0000;
  }
  :global(.google_translate_element .goog-te-gadget select) {
    color: #fff;
    background-color: #000;
  }
  :global(body .skiptranslate iframe) {
    display: none !important;
    visibility: hidden !important;
    height: 0px !important;
  }
</style>
