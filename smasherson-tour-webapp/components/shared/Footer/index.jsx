import Logo from "../Logo"


export default function Footer() {
    return(
        <>
        <footer class="p-4 bg-blue-700 md:p-8 lg:p-10 dark:bg-blue-900 mt-24">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center">
        <Logo height={150} width={150} />
      </a>
      <p class="my-6 text-white dark:text-gray-400">Home of Golf's Non-Traditional Champions</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Events</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Leaderboards</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2020-2023 <a href="https://smasherson.com" target="_blank" class="hover:underline">Smash Golf Tour™</a>. All Rights Reserved.</span>
  </div>
</footer>
        </>
    )
}