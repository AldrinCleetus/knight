"use client";

import React from "react";
import LogoCard from "../cards/LogoCard";
import NextJsIcon from "../icons/NextJsIcon";
import ReactIcon from "../icons/ReactIcon";
import FigmaIcon from "../icons/FigmaIcon";
import GitIcon from "../icons/GitIcon";
import GitHubIcon from "../icons/GithubIcon";
import GradientBorder from "../wrapper/GradientBorder";
import clsx from "clsx";
import { workExperienceList } from "@/contants/portfolioData";
import {
  formatYearRange,
  getDurationString,
} from "@/utils/helpers/generalHelper";
import { myIcons } from "@/contants/iconData";
import Link from "next/link";

type Props = {};

const WorkExperienceCard = (props: Props) => {
  return (
    <div className={clsx("flex flex-1 ")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <div className="mb-4 gap-3 flex flex-col">
            <h3 className="font-bold text-2xl text-tertiary-background-gray">
              My Journey
            </h3>
          </div>
          {/* timeline */}

          <div className="flex flex-1 flex-row">
            <div className="flex my-10  bg-tertiary-background-gray bg-opacity-50 ml-6 rounded-full w-3 "></div>
            <div className="flex  flex-1 my-6 ">
              <ol className="flex gap-12 lg:gap-1 justify-between flex-col  ml-[-29px]  flex-1 ">
                {workExperienceList.map((item, index) => {
                  return (
                    <li key={index} className="flex flex-row gap-4">
                      <div className="w-[42px] h-[42px] rounded-lg overflow-hidden">
                        <Link href={item.linkedInPage || ""}>
                          {/* <LogoCard animate={false}> */}
                          {myIcons[item.icon].icon}
                          {/* </LogoCard> */}
                        </Link>
                      </div>
                      <div className="flex flex-1  flex-row gap-12">
                        <div className="">
                          <h4>{item.companyName}</h4>
                          <p className="text-sm font-light text-nowrap ">
                            {item.position}
                          </p>
                        </div>
                        <div className=" flex flex-1 flex-col text-nowrap">
                          <p className="text-sm font-light text-text-secondary-light-gray text-right">
                            {formatYearRange(item.startDate, item.endDate)}
                          </p>
                          <p className="text-sm font-light text-text-secondary-light-gray text-right">
                            {getDurationString(item.startDate, item.endDate)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </GradientBorder>
    </div>
  );
};

export default WorkExperienceCard;
