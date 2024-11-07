<script lang="ts">
  interface SubData {
    content: {
      images: {
        image: string;
        shape_image_one: string;
        shape_image_two: string;
      };
      heading: string;
      subheading: string;
      button_text: string;
      placeholder: string;
    };
    elements: {
    }[];
  }
    export let data: SubData;
</script>
<section
    class="bg-gray-900 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-72 py-10 md:py-12 xl:py-20 grid lg:grid-cols-2 grid-cols-1 gap-20">
    <div class="h-full">
      <!-- <div class="flex gap-6 items-center borderx">
        <h1 class="font-medium text-xl lg:text-2xl">Blog</h1>
        <div class="flex items-center">
          <div class="w-[50px] h-[26px] bg-gray-800 rounded-xl relativex"></div>
          <div class="border-[7px] rounded-full h-[28px] w-[28px] absolute bg-blue-500"></div>
        </div>
        <h1 class="font-medium text-xl lg:text-2xl">News</h1>
      </div>
      <hr class=" mt-4 border border-gray-600 lg:hidden">
      <div class="space-y-6 mt-6">
        <div class="">
          <a href="#" class="underline decoration-[.5px] text-blue-600">All news</a>
        </div>
        <div class="">
          <h1 class="font-medium lg:text-lg">Subscribe to our news</h1>
          <div class="flex mt-3 w-full gap-0">
            <input type="email" name="" id="" placeholder="Your email"
              class="bg-inherit border-r-none border-l border-t border-b border-gray-600 px-4 py-2 !w-full focus:outline-none focus:border-blue-950">
            <button class="bg-[#0066ff] hover:bg-blue-700 px-4 py-2">Subscribe</button>
          </div>
        </div>
      </div> -->
      <img src={data.content.images.image}/>

    </div>
    <div class="self-center">
      <div class="flex gap-6 items-center borderx">
        <h1 class="font-medium text-xl lg:text-2xl">{data.content.heading}</h1>
      </div>
      <hr class=" mt-4 border border-gray-600 lg:hidden">
      <div class="space-y-6 mt-6">
        <div class="">
          <h1 class="font-medium lg:text-lg">{data.content.subheading}</h1>
          <div class="flex mt-3 w-full gap-0">
            <input type="email" name="" id="" placeholder={data.content.placeholder}
              class="bg-inherit border-r-none border-l border-t border-b border-gray-600 px-4 py-2 !w-full focus:outline-none focus:border-blue-950">
            <button class="bg-[#0066ff] hover:bg-blue-700 px-4 py-2">{data.content.button_text}</button>
          </div>
        </div>
      </div>

    </div>
  </section>