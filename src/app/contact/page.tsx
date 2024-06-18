import AnimatedText from "@/components/AnimatedText";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-7">
        <div className="text-center mb-4">
          <p className="text-gray-500 dark:text-gray-400">
            <AnimatedText text="Get_In_Touch" />
          </p>
          <h1 className="text-4xl font-bold space-x-1">
            <AnimatedText text="Contact_Me" />
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-2 border-2 border-gray-500 rounded-3xl p-2">
          <a
            href="mailto:sc2903175@gmail.com"
            className=" hover:underline flex items-center gap-x-2 p-2 rounded-lg hover:text-blue-500  group
            "
          >
            <span
              className="bg-gray-600 text-white p-2 rounded-full group-hover:bg-blue-500 group-hover:text-white
            "
            >
              <svg className="w-6 h-6" version="1.1" viewBox="0 0 512 512">
                <g>
                  <path
                    fill="currentColor"
                    d="M490.237,90.753c-13.382-13.412-32.076-21.764-52.532-21.756H74.295C33.258,69.012,0.015,102.247,0,143.284
		v225.432c0.015,41.036,33.258,74.272,74.295,74.286h363.41c20.456,0.008,39.15-8.344,52.532-21.755
		C503.648,407.866,512,389.171,512,368.716V143.284C512,122.829,503.648,104.135,490.237,90.753z M74.295,107.04h363.41
		c8.701,0.008,16.466,3.136,22.714,8.21L256,269.478L51.58,115.25C57.829,110.175,65.594,107.047,74.295,107.04z M38.042,368.716
		V143.284c0.016-5.826,1.486-11.205,3.894-16.05l141.813,129.998L41.55,384.044C39.365,379.393,38.058,374.252,38.042,368.716z
		 M437.705,404.96H74.295c-8.204-0.007-15.581-2.771-21.637-7.319l150.618-121.825l22.818,21.711
		c16.911,15.529,42.902,15.529,59.813,0l22.818-21.711l150.61,121.825C453.279,402.189,445.901,404.953,437.705,404.96z
		 M473.958,368.716c-0.016,5.535-1.322,10.677-3.508,15.328L328.251,257.233l141.805-129.998c2.415,4.844,3.886,10.217,3.901,16.05
		V368.716z"
                  />
                </g>
              </svg>
            </span>
            <div>
              <AnimatedText text="sc2903175@gmail.com" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/satish-chaudhary-65224b241/?ref=PortfolioSite"
            target="_blank"
            className=" hover:underline flex items-center gap-x-2 p-2 rounded-lg hover:text-blue-500 group
            "
          >
            <span
              className="bg-gray-600 text-white p-2 rounded-full group-hover:bg-blue-500 group-hover:text-white grid place-items-center
            "
            >
              <svg
                className="w-6 h-6 p-0.5"
                viewBox="0 0 20 20"
                version="1.1"
              >
                <g
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-180.000000, -7479.000000)"
                    fill="currentColor"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                        id="linkedin-[#161]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <div>
              <AnimatedText text="LinkedIn"  />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
