import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "40.000+ Satisfied Clients",
    desc:
      "We have served over 40.000 happy clients since the founding of our company 2 years ago.",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Deals With 7 Airline Companies",
    desc:
      "We have deals and partnerships with 7 of the biggest airline companies in order to ensure the best deals for YOU!",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Ultra Fast Support",
    desc:
      "Our support team is accessible 24/7 for everybody. (And we don't use robots 😉)",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Best Prices And Highest Security",
    desc:
      "We will create the best deals for YOU and make sure that your money is safe with us!",
  },
]
