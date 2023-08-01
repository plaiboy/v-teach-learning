import React from "react";
import { useState } from "react";

import { Button, Text } from "components";


const Header = (props) => {

 

 
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start w-full">
          <div className="flex sm:flex-1 flex-col items-start justify-center pl-2.5 md:pr-10 sm:pr-5 pr-[469.84px] py-6 w-[527px] sm:w-full">
            <Text
              className="text-gray-900 text-xs w-auto whitespace-nowrap"
              size="txtInterMedium12Gray900"
            >
              V-Teach
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-col items-start justify-center md:pl-10 sm:pl-5 pl-[126.47px] pr-[9.99px] py-2.5 w-[439px] sm:w-full">
            <div className="flex flex-row items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start pl-5 sm:pr-5 pr-[20.22px] py-[13px] w-auto">
                <a href="/">
                <Text
                  className="text-[11px] text-gray-900 w-auto"
                  size="txtInterLight11Gray900"
                >
                  Home
                </Text>
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pl-5 sm:pr-5 pr-[20.91px] py-[13px] w-auto">
                <a href="/services">
                <Text
                  className="text-[10px] text-gray-900 w-auto"
                  size="txtInterLight10"
                >
                  Services
                </Text>
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pl-5 pr-[19.91px] py-[13px] w-auto">
                <a href="/about">
                <Text
                  className="text-[11px] text-gray-800 w-auto"
                  size="txtInterLight11"
                >
                  About
                </Text>
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pl-5 sm:pr-5 pr-[21.47px] py-[13px] w-auto">
                <a href="/contact"> 
                <Text
                  className="text-[10px] text-gray-900 w-auto"
                  size="txtInterLight10"
                >
                  Contact
                </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-[32.89px] pr-[32.91px] sm:px-5 py-[10.5px] w-[152px]">
            <a href="/signup">
            <Button className="bg-teal-800 cursor-pointer font-inter min-w-[86px] py-4 rounded-md text-[10px] text-center text-white-A700">
              Sign Up
            </Button>
           </a>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
