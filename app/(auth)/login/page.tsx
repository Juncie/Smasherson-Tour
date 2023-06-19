export default function LoginPage() {
  return (
    <div className="container mx-auto mb-16">
      <section className="flex items-center justify-center">
        <div className="flex overflow-hidden shadow-md">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-xl lg:w-96">
              <div>
                <a href="/" className="text-medium text-blue-600">
                  Smash Golf Tour
                </a>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Welcome Back!</h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6" data-bitwarden-watching="1">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-600">
                        {' '}
                        Email address{' '}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required={true}
                          placeholder="Your Email"
                          className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-neutral-600">
                        {' '}
                        Password{' '}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required={true}
                          placeholder="Your Password"
                          className="block w-full transform rounded-lg border border-transparent bg-gray-50 px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-600">
                          {' '}
                          Remember me{' '}
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                          {' '}
                          Forgot your password?{' '}
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full transform items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-neutral-600"> Or continue with </span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block w-full transform items-center rounded-xl border-2 border-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                        <defs>
                                            <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                                        </defs>
                                        <clipPath id="b">
                                            <use xlinkHref="#a" overflow="visible"></use>
                                        </clipPath>
                                        <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                        <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                        <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                        <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                    </svg>
                        <span className="ml-4"> Log in with Google </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 overflow-hidden lg:block">
            {/* <img className="absolute inset-0 object-cover w-full h-full" src="/assets/images/placeholders/rectangleWide.png" alt=""/> */}
          </div>
        </div>
      </section>
    </div>
  );
}
