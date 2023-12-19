import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 100)
  }

  return (
    <section className="absolute bottom-0 grid grid-cols-[repeat(20,minmax(0px,50px))] grid-rows-1">
      <div
        className="absolute bottom-0 left-1/2 h-[100px] overflow-hidden"
        style={{ transform: 'translate(-50%, 0%)' }}
      >
        <svg
          width="266"
          height="100"
          viewBox="0 0 266 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_61_8091)">
            <path
              d="M112 0H154C186 0 195.501 24.1398 205.732 48.6985C216.325 74.1247 227 100 262 100H4.00006C39.0001 100 49.6754 74.1247 60.2678 48.6985C70.4989 24.1398 80.0001 0 112 0Z"
              fill="url(#paint0_linear_61_8091)"
            />
            <path
              d="M112 0.25H154C169.923 0.25 180.229 6.24974 187.838 15.3006C195.21 24.0697 200.053 35.7041 204.994 47.575C205.163 47.9813 205.332 48.3879 205.502 48.7947L205.604 49.0418C210.863 61.6652 216.18 74.4274 224.525 84.0479C231.572 92.1732 240.777 98.0545 253.909 99.75H12.0914C25.2236 98.0545 34.4277 92.1732 41.4756 84.0479C49.8205 74.4273 55.137 61.6651 60.3957 49.0417L60.4986 48.7947C60.668 48.3879 60.8373 47.9813 61.0064 47.5751C65.9474 35.7041 70.79 24.0697 78.1619 15.3006C85.7708 6.24974 96.0772 0.25 112 0.25Z"
              stroke="#7582F4"
              strokeOpacity="0.5"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_61_8091"
              x="6.10352e-05"
              y="0"
              width="266"
              height="108"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.458824 0 0 0 0 0.509804 0 0 0 0 0.956863 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_61_8091"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_61_8091"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_61_8091"
              x1="183.615"
              y1="100"
              x2="183.615"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#262C51" />
              <stop offset="1" stopColor="#3E3F74" />
            </linearGradient>
          </defs>
        </svg>
        {isClicked ? (
          <Image
            onClick={handleClick}
            className="absolute bottom-1 left-1/2"
            style={{ transform: 'translate(-50%, 0%)' }}
            src="/assets/button/Button-pressed.png"
            width={104}
            height={111}
            alt="Button"
          ></Image>
        ) : (
          <Image
            onClick={handleClick}
            className="absolute bottom-0 left-1/2"
            style={{ transform: 'translate(-50%, 0%)' }}
            src="/assets/button/Button.png"
            width={118}
            height={100}
            alt="Button"
          ></Image>
        )}
      </div>
      <div className="w-screen flex">
        <Image
          className="absolute left-10 bottom-7"
          src="/assets/button/Symbol.png"
          width={22}
          height={25}
          alt="Button"
        ></Image>

        <svg
          width="100%"
          height="89"
          viewBox="0 0 390 89"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_61_8086)">
            <path
              d="M0 1C0 1 76.0769 16.9822 127 21C153.339 23.0782 168.554 24 195 24C221.446 24 235.661 23.0782 262 21C312.923 16.9822 390 1 390 1V89H0V1Z"
              fill="url(#paint0_linear_61_8086)"
              fillOpacity="0.26"
            />
            <path
              d="M0 1L0.0513978 0.755341L-0.25 0.692023V1V89V89.25H0H390H390.25V89V1V0.692844L389.949 0.755207L390 1C389.949 0.755207 389.949 0.755266 389.948 0.755386L389.946 0.755929L389.935 0.758104L389.893 0.766774L389.727 0.801111C389.58 0.831451 389.36 0.876545 389.072 0.935541C388.495 1.05353 387.643 1.22713 386.539 1.44951C384.333 1.89427 381.124 2.53416 377.113 3.31459C369.093 4.87548 357.868 6.99851 345.053 9.24707C319.42 13.7446 287.43 18.7428 261.98 20.7508C235.644 22.8287 221.437 23.75 195 23.75C168.563 23.75 153.355 22.8286 127.02 20.7508C101.571 18.7428 69.8304 13.7446 44.4475 9.24714C31.757 6.99859 20.6577 4.87557 12.731 3.3147C8.76767 2.53427 5.59756 1.89439 3.41838 1.44963C2.32879 1.22725 1.48694 1.05366 0.917538 0.935668C0.632837 0.876674 0.416248 0.831581 0.270862 0.801242L0.10657 0.766906L0.0651988 0.758237L0.054834 0.756062L0.0522476 0.755519C0.0516779 0.755399 0.0513978 0.755341 0 1Z"
              stroke="#7582F4"
              strokeOpacity="0.5"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_61_8086"
              x="-50.5"
              y="-49.616"
              width="491"
              height="189.116"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_61_8086"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_61_8086"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_61_8086"
              x1="271.51"
              y1="1"
              x2="271.51"
              y2="89"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3A3A6A" />
              <stop offset="1" stopColor="#25244C" />
            </linearGradient>
          </defs>
        </svg>
        <Image
          className="absolute right-8 bottom-4"
          src="/assets/button/List.png"
          width={44}
          height={44}
          alt="Button"
        ></Image>
      </div>
    </section>
  )
}
