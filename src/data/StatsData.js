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
    title: "Title1",
    desc: "Desc1",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Title2",
    desc: "Desc2",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Title3",
    desc: "Desc3",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Title4",
    desc: "Desc4",
  },
]
