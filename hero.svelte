<script>
// @ts-nocheck
import AOS from "aos";
import { onMount } from 'svelte';

let yields = {
  "3 Months": '50%',
  "6 Months": '50%',
  "12 Months": '50%',
};

const maxSpeed = 20; // Maximum speed factor (adjust as needed)
const updateInterval = 5000; // 5 seconds
const pauseInterval = 5000; // 5 seconds

function getRandomPercentage() {
  return Math.floor(Math.random() * 1001) + '%';
}

function updateYields() {
  const speedFactor = Math.random() * maxSpeed + 4;

  Object.keys(yields).forEach((key) => {
    const currentValue = parseFloat(yields[key]);
    const targetValue = parseFloat(getRandomPercentage());
    const step = (targetValue - currentValue) / speedFactor;

    let current = currentValue;

    const intervalId = setInterval(() => {
      current += step;
      yields = { ...yields, [key]: Math.round(current) + '%' };

      if ((step > 0 && current >= targetValue) || (step < 0 && current <= targetValue)) {
        clearInterval(intervalId);
        setTimeout(updateYields, pauseInterval); // Pause for 5 seconds before starting a new update
      }
    }, 50);
  });
}

onMount(() => {
  // Initial update on page load
  updateYields();

  // Set interval to update yields every 5 seconds
  setInterval(updateYields, updateInterval);
  AOS.init();
});


</script>

<section
  class="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-10 md:py-20 xl:py-32"
  style="background-image: radial-gradient(49.61% 44.12% at 59.2% 55.87%,#001c31 8.64%,#000 100%);"
>
  <div class="flex max-lg:flex-col items-center gap-6 lg:justify-between">
    <!-- hero-left -->
    <div class="" data-aos="fade-up">
      <div class="space-y-2 max-lg:text-center">
        <h1
          class="max-lg:inline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin"
        >
          Trade.
        </h1>
        <h1
          class="max-lg:inline max-md:ml-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin"
        >
          Invest.
        </h1>
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          Multiply.
        </h1>
      </div>
      <div class="mt-8 xl:mt-12 flex max-lg:flex-col gap-4" data-aos="fade-up">
        <a
          href="https://trade.expertrader.org/user/register"
          class="bg-[#0066ff] hover:bg-blue-700 px-6 py-3 text-center w-[180px]"
          >Open an account</a
        >
        <a
          href="https://trade.expertrader.org"
          class="text-[#0066ff] border border-[#0066ff] px-6 py-3 text-center w-[180px] hover:bg-[#0066ff] hover:text-gray-100"
          >Login</a
        >
      </div>
    </div>
    <!-- hero-right -->
    <div class="lg:w-1/2 borderx w-full">
      <div
        class="max-lg:mt-5 flex sm:flex-col max-sm:justify-between max-lg:gap-16 justify-center max-lg:items-center max-lg:bg-contain max-sm:bg-center hero-img"
        style="background-image: url(./images/hero_bg.svg); background-repeat: no-repeat;"
      >
        <!-- <div
          class="flex max-sm:flex-col max-sm:gap-8 sm:justify-between borderx sm:w-full"
        >
          <p style="color: #999a9a; font-size: 12px;">
            Three-months yield
            <br />
            <b class="text-xl text-white">{yields.threeMonths}</b>
          </p>
          <p style="color: #999a9a; font-size: 12px;">
            Six-months yield
            <br />
            <b class="text-xl text-white">{yields.sixMonths}</b>
          </p>
          <p style="color: #999a9a; font-size: 12px;">
            Twelve-months yield
            <br />
            <b class="text-xl text-white">{yields.twelveMonths}</b>
          </p>
        </div> -->
        <div class="flex max-sm:flex-col max-sm:gap-8 sm:justify-between borderx sm:w-full" data-aos="fade-up">
          {#each Object.keys(yields) as key}
            <p style="color: #999a9a; font-size: 12px;">
              {key.charAt(0).toUpperCase() + key.slice(1)} yield
              <br>
              <b class="text-xl text-white">{yields[key]}</b>
            </p>
          {/each}
        </div>
        <div class="mt-10 place-self-center borderx" data-aos="fade-up">
          <img
            src="./images/phone.png"
            alt=""
            class="max-sm:-ml-10 w-[309px] max-lg:w-[220px] max-lg:h-[330px] h-[420px]"
          />
        </div>
      </div>
    </div>
  </div>
</section>
