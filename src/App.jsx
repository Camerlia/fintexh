function App() {
  return (
    <>
      <div class="fixed top-0 left-0 w-full z-[100] bg-white">
        <nav className="w-full z-6 flex transition-all duration-400 bg-green-100/20 ease-in-out px-0 h-[15.55vw] md:h-[15.55vw] lg:h-[5.21vw]">
          <div className="flex items-center justify-between pl-[5.2vw] w-screen max-w-screen md:justify-between lg:justify-start">
            <div>
              <img src="/SVG.svg" alt="logo" className="max-w-[80px]" />
            </div>
            <div className="block">
              <div>
                <ul className="flex items-center flex-row list-none m-0 ml-[17px] p-0">
                  <li className="relative flex cursor-pointer font-normal text-[1.04vw] text-black mx-[0.75em] lg:mx-[1.56vw]">
                    <a className=" opacity-90 no-underline text-[2.5vw] leading-[22px] py-4 lg:text-[1.04vw] hover:text-teal-500 focus:text-teal-500 font-semibold -translate-y-[2px]">
                      Personal
                    </a>
                  </li>
                  <li className="relative flex cursor-pointer font-normal text-[1.04vw] text-black mx-[0.75em] lg:mx-[1.56vw]">
                    <a className=" opacity-90 no-underline text-[2.5vw] leading-[22px] py-4 lg:text-[1.04vw] hover:text-teal-500 focus:text-teal-500 font-semibold -translate-y-[2px]">
                      Business
                    </a>
                  </li>
                  <li className="relative flex cursor-pointer font-normal text-[1.04vw] text-black mx-[0.75em] lg:mx-[1.56vw]">
                    <a className=" opacity-90 no-underline text-[2.5vw] leading-[22px] py-4 lg:text-[1.04vw] hover:text-teal-500 focus:text-teal-500 font-semibold -translate-y-[2px]">
                      Company
                    </a>
                  </li>
                  <li className="relative flex cursor-pointer font-normal text-[1.04vw] text-black mx-[0.75em] lg:mx-[1.56vw]">
                    <a className=" opacity-90 no-underline text-[2.5vw] leading-[22px] py-4 lg:text-[1.04vw] hover:text-teal-500 focus:text-teal-500 font-semibold -translate-y-[2px]">
                      CSR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="bg-[url('../public/home01.jpg.png')] h-[100vh] bg-cover pt-[120px] pl-[5.2vw]">
        <div className={`max-w-[850px]`}>
          <h1 className={`text-white font-bold md:text-6xl text-3xl`}>
            We are Beyond Banking
          </h1>
          <p
            className={`my-4 text-[#210F60] text-base md:text-lg md:leading-8`}
          >
            With mission to make financial services more inclusive through
            technology, OPay is dedicated to providing secure, easy to use &
            affordable financial services with super fast user experience,
            amazing incentive package on transfer/airtime & data top-up,
            innovative product to use as balance with amazing daily interest,
            reliable debit card with no charge and best resolution experience
            etc. With OPay account, you can have full control of your finances,
            payments & transactions with ease, all on one platform! Yes, OPay is
            your one-stop payment services platform and more.
          </p>
          <img
            src={`../public/frame.png`}
            className={`sm:max-w-[350px] `}
            alt={``}
          />
          <div className={`flex gap-3 py-4`}>
            <img src={`../public/google-play.svg`} alt={``} />
            <img src={`../public/appstore.svg`} alt={``} />
          </div>
        </div>
      </div>
      <div className={`w-full max-w-full px-[5.5vw] m-auto`}>
        <div className={`flex flex-col md:flex-row md:gap-8 gap-4`}>
          <div class="pt-7 pb-10">
            <div class="relative flex-shrink-0 z-10 w-full mx-auto pt-0">
              <div className={`w-72 flex justify-end`}>
                <img
                  src={`../public/slide-img-1.png`}
                  alt={``}
                  className={`max-h-[250px]`}
                />
              </div>
              <div
                className={`hover:bg-teal-500 m-auto hover:text-white transition-all flex flex-col gap-3 bg-white border-2 rounded-md border-gray-100 bottom-1 py-10 px-2 w-72`}
              >
                <h3>Easy Account Opening</h3>
                <p className={`font-extralight text-sm`}>
                  Instant account opening with amazing welcome bonuses
                </p>
              </div>
            </div>
          </div>
          <div class="pt-7 pb-10">
            <div class="relative flex-shrink-0 z-10 w-full mx-auto pt-0">
              <div className={`w-72 flex justify-end`}>
                <img
                  src={`../public/slide-img-2.png`}
                  alt={``}
                  className={`max-h-[250px]`}
                />
              </div>
              <div
                className={`hover:bg-teal-500 m-auto hover:text-white transition-all flex flex-col gap-3 bg-white border-2 rounded-md border-gray-50 bottom-1 py-10 px-2 w-72`}
              >
                <h3>Easy Account Opening</h3>
                <p className={`font-extralight text-sm`}>
                  Instant account opening with amazing welcome bonuses
                </p>
              </div>
            </div>
          </div>
          <div class="pt-7 pb-10">
            <div class="relative flex-shrink-0 z-10 w-full mx-auto pt-0">
              <div className={`w-72 flex justify-end`}>
                <img
                  src={`../public/slide-img-6.png`}
                  alt={``}
                  className={`max-h-[250px]`}
                />
              </div>
              <div
                className={`hover:bg-teal-500 m-auto hover:text-white transition-all flex flex-col gap-3 bg-white border-2 rounded-md border-gray-100 bottom-1 py-10 px-2 w-72`}
              >
                <h3>Easy Account Opening</h3>
                <p className={`font-extralight text-sm`}>
                  Instant account opening with amazing welcome bonuses
                </p>
              </div>
            </div>
          </div>
          <div class="pt-7 pb-10">
            <div class="relative flex-shrink-0 z-10 w-full mx-auto pt-0">
              <div className={`w-72 flex justify-end`}>
                <img
                  src={`../public/slide-img-5.png`}
                  alt={``}
                  className={`max-h-[250px]`}
                />
              </div>
              <div
                className={`hover:bg-teal-500 m-auto hover:text-white transition-all flex flex-col gap-3 bg-white border-2 rounded-md border-gray-100 bottom-1 py-10 px-2 w-72`}
              >
                <h3>Easy Account Opening</h3>
                <p className={`font-extralight text-sm`}>
                  Instant account opening with amazing welcome bonuses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={``}>
        <h3 className="text-left text-[3.1vw] text-[#210F60] leading-[4.17vw] pl-[5.69vw] pb-[2.6vw] ml-0">
          Our services
        </h3>
        <div className={`bg-teal-500 p-10`}>
          <div className=" flex w-full px-[5.6vw] gap-4 pl-[5.69vw] md:flex-row md:justify-between md:items-center">
            <div className=" w-full h-full ">
              <div className="md:w-[41.7vw] md:pr-0 md:pl-0 md:mt-0 md:ml-0">
                <h2 className="text-center text-white md:text-left text-[3vw] leading-[3vw] mt-4 mb-4 md:text-[2.78vw] md:leading-[3.47vw] md:mt-0 md:ml-0 md:pl-0 md:mb-0">
                  Fund your Account, Make Transfers, Pay Bills
                </h2>
                <p className="text-left mt-4 text-[1.56vw] leading-[2.43vw] pb-0 w-[33.7vw] pl-0 text-white">
                  Live life on your own terms! Add money to your OPay wallet and
                  transfer to other bank accounts for free. Enjoy bonuses on
                  airtime & data top-ups and fast bill payments at no extra
                  charge.
                </p>
              </div>
            </div>
            <div className={`rounded-2xl overflow-hidden`}>
              <img src={`../public/OurServices01.jpg.png`} alt={``} />
            </div>
          </div>
        </div>
        <div className={`bg-white p-10`}>
          <div className=" flex w-full gap-4 px-[5.6vw] pl-[5.69vw] md:flex-row md:justify-between md:items-center">
            <div className={`rounded-2xl overflow-hidden`}>
              <img src={`../public/OurServices02.jpg.png`} alt={``} />
            </div>
            <div className=" w-full h-full ">
              <div className="md:w-[41.7vw] md:pr-0 md:pl-0 md:mt-0 md:ml-0 flex flex-col md:items-end">
                <h2 className=" text-teal-500 text-center md:text-left mt-[2.78vw] md:mt-0 w-[33.7vw] lg:text-[2.78vw] lg:leading-[3.47vw] lg:ml-0  lg:mb-0">
                  OPay Debit Cards, Your Passport To The World
                </h2>
                <p className=" mt-4 text-[1.56vw] leading-[2.43vw] pb-0 w-[33.7vw] pl-0 text-[#210F60] ">
                  Get your OPay Debit Card instantly at select OPay agent stores
                  or apply via the OPay app. Enjoy secure, fast, and convenient
                  payments with zero maintenance fees for active cards! The OPay
                  Debit Card is accepted at any ATM, POS, or online.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-teal-500 p-10`}>
          <div className=" flex w-full px-[5.6vw] gap-4 pl-[5.69vw] md:flex-row md:justify-between md:items-center">
            <div className=" w-full h-full ">
              <div className="md:w-[41.7vw] md:pr-0 md:pl-0 md:mt-0 md:ml-0">
                <h2 className="text-center text-white md:text-left text-[3vw] leading-[3vw] mt-4 mb-4 md:text-[2.78vw] md:leading-[3.47vw] md:mt-0 md:ml-0 md:pl-0 md:mb-0">
                  Owealth
                </h2>
                <p className="text-left mt-4 text-[1.56vw] leading-[2.43vw] pb-0 w-[33.7vw] pl-0 text-white">
                  With Owealth, you can get amazing daily interest on your funds
                  while having full access and control of the money. Make
                  transactions at any time without affecting your interest!
                  Powered by BlueRidge Microfinance Bank
                </p>
              </div>
            </div>
            <div className={`rounded-2xl overflow-hidden`}>
              <img src={`../public/OurServices03.jpg.png`} alt={``} />
            </div>
          </div>
        </div>
      </div>

      <div className={` w-full bg-gray-300`}>
        <div className="w-full max-w-full px-[5.65vw] py-[4.04vw] md:max-w-[720px] lg:max-w-[960px]">
          <div className="flex flex-col justify-center py-[2.63vw] md:flex-col md:justify-center md:items-center lg:flex-row lg:justify-start lg:items-center lg:p-0">
            <div className="relative w-full rounded-md overflow-hidden md:flex lg:flex flex-shrink-0 mb-0 lg:w-[49.56vw] lg:h-[27.56vw]">
              <img
                src={`../public/OurServices01.jpg.png`}
                alt={`service image`}
              />
            </div>
            <div className=" md:flex md:flex-col md:justify-center md:items-start md:flex-shrink-0 md:pb-0 md:ml-[48px] lg:text-[2.08vw] lg:pb-[20px] lg:ml-[3.91vw] lg:w-[31vw]">
              <div className={`p-6 bg-white`}>
                <img
                  src={`../public/qr-code.png`}
                  alt={`qr-code`}
                  width={100}
                />
                <p className="text-[2.08vw] py-4">
                  Use your phones camera to scan and download the OPay app
                  Available on <span className={`text-teal-500`}>iOS</span> and{" "}
                  <span className={`text-teal-500`}>Android</span>
                </p>
                <div className={`flex gap-3 py-4`}>
                  <img src={`../public/google-play.svg`} alt={``} />
                  <img src={`../public/appstore.svg`} alt={``} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-white py-8 font-bold`}>
        <h3 className="text-left text-[3.1vw] text-[#210F60] leading-[4.17vw] pl-[5.69vw] pb-[2.6vw] ml-0">
          Here is what our customers think
        </h3>
        <div className={`flex md:flex-row flex-col`}>
          <div className={`flex w-full px-[5.6vw] gap-4 pl-[5.69vw]`}>
            <div className="w-[222.286px] mr-[90px]">
              <div className="relative overflow-hidden rounded-lg w-[77.78vw] h-[77.78vw] lg:w-[21.3vw] lg:h-[21.3vw]">
                <img src={`../public/customer-think-img-0.png.png`} alt={``} />
              </div>

              <p
                className={`text-[#697988] text-[4.44vw] leading-[6.67vw] my-[4.44vw] lg:text-[1.04vw] lg:leading-[1.47vw] lg:my-[1.39vw_0px]`}
              >
                OPay makes banking very easy for me; transfer of funds &
                transactions are seamless; I give OPay a solid 10/10.
              </p>
            </div>
          </div>
          <div className={`flex w-full px-[5.6vw] gap-4 pl-[5.69vw]`}>
            <div className="w-[222.286px] mr-[90px]">
              <div className="relative overflow-hidden rounded-lg w-[77.78vw] h-[77.78vw] lg:w-[21.3vw] lg:h-[21.3vw]">
                <img src={`../public/customer-think-img-0.png.png`} alt={``} />
              </div>

              <p
                className={`text-[#697988] text-[4.44vw] leading-[6.67vw] my-[4.44vw] lg:text-[1.04vw] lg:leading-[1.47vw] lg:my-[1.39vw_0px]`}
              >
                OPay makes banking very easy for me; transfer of funds &
                transactions are seamless; I give OPay a solid 10/10.
              </p>
            </div>
          </div>
          <div className={`flex w-full px-[5.6vw] gap-4 pl-[5.69vw]`}>
            <div className="w-[222.286px] mr-[90px]">
              <div className="relative overflow-hidden rounded-lg w-[77.78vw] h-[77.78vw] lg:w-[21.3vw] lg:h-[21.3vw]">
                <img src={`../public/customer-think-img-0.png.png`} alt={``} />
              </div>

              <p
                className={`text-[#697988] text-[4.44vw] leading-[6.67vw] my-[4.44vw] lg:text-[1.04vw] lg:leading-[1.47vw] lg:my-[1.39vw_0px]`}
              >
                OPay makes banking very easy for me; transfer of funds &
                transactions are seamless; I give OPay a solid 10/10.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-teal-500 pt-[6.67vw] pb-0 lg:pt-[5vw] lg:pb-[5vw]">
        <div className="w-full max-w-[1200px] mx-auto px-4 static">
          <div className={`flex flex-row gap-4`}>
            <div className="flex flex-col justify-start ml-0 pl-[5.65vw] md:flex-col md:justify-start md:items-center md:p-0 md:pl-[5.65vw] lg:justify-start lg:items-center lg:pl-[5.65vw]">
              <img
                src={`../public/security-banner-1.png.png`}
                alt={`security image`}
                className="relative cursor-pointer w-[88.88vw] mb-[3vw] lg:w-[41.1vw] lg:mb-[1.4vw]"
              />
              <img
                src={`../public/security-banner-1.png.png`}
                alt={`security image`}
                className="relative cursor-pointer w-[88.88vw] mb-[3vw] lg:w-[41.1vw] lg:mb-[1.4vw]"
              />
            </div>
            <div className="pb-[2.16vw] ml-0 md:flex md:flex-col md:justify-center md:flex-shrink-0 md:pb-0 lg:ml-[48px] xl:ml-[48px] xl:pb-0">
              <h2 className="text-white font-semibold text-[5.55vw] leading-[8.33vw] mb-[4.44vw] pt-[2vw] pl-0 lg:text-[#210F60] lg:font-bold lg:text-[3.13vw] lg:leading-[4.65vw] lg:mb-[1vw] lg:pl-[3vw] lg:pt-0 xl:text-[3.13vw] xl:leading-[4.65vw] xl:mb-[1vw] xl:pl-[3vw] xl:pt-0 xl:w-[40.4vw]">
                Your Security and Privacy is our priority
              </h2>
              <div>
                <h3
                  className={`text-[#210F60] font-medium text-[4.44vw] leading-[6.67vw] mb-[1.11vw] pl-0 lg:text-white lg:text-[2.08vw] lg:leading-[3.13vw] lg:mb-[0.34vw] lg:pl-[3vw] xl:text-white xl:text-[2.08vw] xl:leading-[3.13vw] xl:mb-[0.34vw] xl:pl-[3vw]`}
                >
                  Advanced Fraud Detection
                </h3>
                <p
                  className={`text-white font-normal text-[3.33vw] leading-[5.83vw] mb-[4.44vw] pl-0 w-[85.55vw] lg:text-[1.04vw] lg:leading-[2.08vw] lg:mb-[1vw] lg:pl-[3vw] lg:w-[36vw] xl:text-[1.04vw] xl:leading-[2.08vw] xl:mb-[1vw] xl:pl-[3vw] xl:w-[36vw]`}
                >
                  Your data is stored and encrypted using strong cryptography.
                  We scan our systems daily against security threats.
                </p>
              </div>
              <div>
                <h3
                  className={`text-[#210F60] font-medium text-[4.44vw] leading-[6.67vw] mb-[1.11vw] pl-0 lg:text-white lg:text-[2.08vw] lg:leading-[3.13vw] lg:mb-[0.34vw] lg:pl-[3vw] xl:text-white xl:text-[2.08vw] xl:leading-[3.13vw] xl:mb-[0.34vw] xl:pl-[3vw]`}
                >
                  Advanced Fraud Detection
                </h3>
                <p
                  className={`text-white font-normal text-[3.33vw] leading-[5.83vw] mb-[4.44vw] pl-0 w-[85.55vw] lg:text-[1.04vw] lg:leading-[2.08vw] lg:mb-[1vw] lg:pl-[3vw] lg:w-[36vw] xl:text-[1.04vw] xl:leading-[2.08vw] xl:mb-[1vw] xl:pl-[3vw] xl:w-[36vw]`}
                >
                  Your data is stored and encrypted using strong cryptography.
                  We scan our systems daily against security threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white pt-[6.67vw] pb-0 lg:pt-[5vw] lg:pb-[5vw]">
        <div className="w-full max-w-[1200px] mx-auto px-4 static">
          <div className={`flex flex-row gap-4`}>
            <div className="pb-[1.5vw] ml-0 md:flex md:flex-col md:justify-center md:flex-shrink-0 md:pb-0 lg:ml-[10px] xl:ml-0 xl:pb-0">
              <h2 className="text-white font-medium text-[5.56vw] leading-[8.33vw] mb-[3.44vw] pt-[1vw] pb-0 pl-0 pr-0 lg:text-[#210F60] lg:font-semibold lg:text-[3.13vw] lg:leading-[5.21vw] lg:mb-[1.39vw] lg:p-0 lg:w-[42.3vw]">
                Customer Satisfaction, Our Priority
              </h2>
              <p className="text-white font-normal text-[3.33vw] leading-[5.83vw] mb-[4.44vw] lg:text-[#210F60] lg:text-[1.39vw] lg:leading-[2.34vw] lg:mb-[1.39vw] lg:w-[33.71vw] xl:text-[#210F60] xl:text-[1.39vw] xl:leading-[2.34vw] xl:mb-[1.39vw] xl:w-[33.71vw]">
                we are here for you to provide 7*24 quick customer service,
                visit our in-app customer service center or physical customer
                service center or send us message via official social medias or
                calll us via hotline as below
              </p>
            </div>
            <div className={`flex flex-row gap-4`}>
              <div className="flex flex-col justify-start ml-0 pl-[5.65vw] md:flex-col md:justify-start md:items-center md:p-0 md:pl-[5.65vw] lg:justify-start lg:items-center lg:pl-[5.65vw]">
                <img
                  src={`../public/csm.png`}
                  alt={`security image`}
                  className="relative cursor-pointer w-[88.88vw] mb-[3vw] lg:w-[41.1vw] lg:mb-[1.4vw]"
                />
                <img
                  src={`../public/csm.png`}
                  alt={`security image`}
                  className="relative cursor-pointer w-[88.88vw] mb-[3vw] lg:w-[41.1vw] lg:mb-[1.4vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#1DCF9F] ">
          <div class="relative w-full min-h-[64px] bg-[url('../public/home01.jpg.png')] bg-cover bg-center">
            <div class="absolute inset-0 bg-teal-500 opacity-80"></div>
            <div class="relative z-10 p-4 text-white">
              <div className="w-full max-w-full pl-[5.65vw]">
                <div className="flex flex-col pt-[5vw] lg:flex-row lg:pt-0 xl:flex-row xl:pt-0">
                  <div className="flex-shrink-0 w-1/2 py-[3vw] lg:w-[9vw] lg:py-[3.73vw_0px_3.21vw] xl:w-[9vw] xl:py-[3.73vw_0px_3.21vw]">
                    <h4>Company</h4>
                    <ul className={`flex flex-col gap-2`}>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0 w-1/2 py-[3vw] lg:w-[9vw] lg:py-[3.73vw_0px_3.21vw] xl:w-[9vw] xl:py-[3.73vw_0px_3.21vw]">
                    <h4>Company</h4>
                    <ul className={`flex flex-col gap-2`}>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0 w-1/2 py-[3vw] lg:w-[9vw] lg:py-[3.73vw_0px_3.21vw] xl:w-[9vw] xl:py-[3.73vw_0px_3.21vw]">
                    <h4>Company</h4>
                    <ul className={`flex flex-col gap-2`}>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0 w-1/2 py-[3vw] lg:w-[9vw] lg:py-[3.73vw_0px_3.21vw] xl:w-[9vw] xl:py-[3.73vw_0px_3.21vw]">
                    <h4>Company</h4>
                    <ul className={`flex flex-col gap-2`}>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0 w-1/2 py-[3vw] lg:w-[9vw] lg:py-[3.73vw_0px_3.21vw] xl:w-[9vw] xl:py-[3.73vw_0px_3.21vw]">
                    <h4>Company</h4>
                    <ul className={`flex flex-col gap-2`}>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full bg-teal-500 text-white p-4 text-center ">
        for Learning purpose only
      </div>
    </>
  );
}

export default App;
