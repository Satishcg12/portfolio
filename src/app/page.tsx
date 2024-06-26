import Image from "next/image";
import ProfileImage from "@/images/profile.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col flex-grow gap-y-10 justify-center items-center ">
      <div className="flex flex-col md:flex-row gap-y-12 gap-x-20 items-center text-center">
        <div className="image-blob">
          <Image
            src={ProfileImage}
            alt="Satish Chaudhary"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-y-3 items-center md:items-start">
          <h1 className="text-4xl font-bold">Satish Chaudhary</h1>
          <p className=" text-gray-500 font-semibold dark:text-gray-300 text-lg">
            Software Developer
          </p>

          <div className="flex gap-x-5 font-semibold">
            <a className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white shadow-md"
              href="/cv.pdf"
              download={true}
            >
              Download CV
            </a>
            <Link 
            href={"/contact"}
             className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white shadow-md"
            >
              Contact me
            </Link>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/satish-chaudhary-65224b241/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 font-semibold  capitalize hover:text-blue-500 dark:hover:text-blue-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 50 50"
              >
                <path
                  fill="currentColor"
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.github.com/satishCG12"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 font-semibold  capitalize hover:text-black dark:hover:text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-9 px-4 capitalize">
        <span className="font-bold border-r-2 pr-4">tech stack</span>
        <span className="flex flex-wrap items-center gap-x-5">
          {/* html */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            viewBox="0 0 48 48"
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
          {/* css */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1"
              x1="16.33"
              x2="32.293"
              y1="-2.748"
              y2="41.109"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)"
              d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
            ></path>
            <path
              fill="#35c1f1"
              d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
            ></path>
            <path
              fill="#fff"
              d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"
            ></path>
            <path
              fill="#d6e0e9"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"
            ></path>
            <path
              d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z"
              opacity=".05"
            ></path>
            <path
              d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z"
              opacity=".07"
            ></path>
          </svg>

          {/* js */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            viewBox="0 0 48 48"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            ></path>
          </svg>
          {/* next js */}
          <svg
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 512 308.883"
            className="h-9 w-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675h-97.574zm105.22 0h10.26l45.467 63.423 46.473-63.424 63.211-80.56-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128zm118.898 7.676v-7.677h110.048v7.676h-50.699v136.54h-8.852v-136.539zm-344.928-7.677h11.065l152.58 228.323-63.053-84.107-91.338-133.308-.402 133.31h-8.852zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212s-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z" />
          </svg>
          {/* tailwind */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
              x1="21.861"
              x2="25.703"
              y1="8.237"
              y2="36.552"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#00c1e0"></stop>
              <stop offset="1" stopColor="#009bb8"></stop>
            </linearGradient>
            <path
              fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
              d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
            ></path>
          </svg>
        </span>
      </div>
    </main>
  );
}
