import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const ContactpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[390px] w-full" />
        <div className="flex flex-col items-start justify-start max-w-[1920px] pb-2.5 pt-10 md:px-10 sm:px-5 px-[400px] w-full">
          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center p-1 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-2.5 md:ml-[0] ml-[5px] pb-[120px] md:pr-10 sm:pr-5 pr-[120px] w-[52%] md:w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[188.94px] w-[451px] sm:w-full">
                <Text
                  className="sm:text-[29px] md:text-[31px] text-[33px] text-gray-900 w-auto whitespace-nowrap"
                  size="txtInterRegular33"
                >
                  Have Questions?
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-3 w-[451px] sm:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[206.94px] w-[451px] sm:w-full">
                  <Text
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtInterLight11"
                  >
                    Please feel free to call or email us,
                  </Text>
                  <Text
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtInterLight11"
                  >
                    or use our contact form to get in touch with us. 
                  </Text>
                  <Text
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtInterLight11"
                  >
                    We look forward to hearing from you!
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[19px] md:pr-10 sm:pr-5 pr-[323.94px] w-[451px] sm:w-full">
                <Text
                  className="text-[13px] text-gray-900 w-auto"
                  size="txtInterMedium13"
                >
                  Emergency? Call Us:
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-5 md:pr-10 sm:pr-5 pr-[383.94px] w-[451px] sm:w-full">
                <Text
                  className="text-[11px] text-gray-800 w-auto"
                  size="txtInterLight11"
                >
                  +2547o7783401
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[385px] mt-[19px] md:pr-10 sm:pr-5 pr-[370.94px] w-[451px] sm:w-full">
                <Text
                  className="text-[13px] text-gray-900 w-auto"
                  size="txtInterMedium13"
                >
                  Send Us Mail
                </Text>
              </div>
            </div>
            <div className="bg-gray-100 flex sm:flex-1 flex-col items-start justify-start mb-[155px] mr-[5px] md:mt-0 mt-[105px] pb-8 pt-[60px] md:px-10 sm:px-5 px-[54.5px] w-[518px] sm:w-full">
              <div className="flex flex-col gap-7 items-start justify-start pb-7 w-[409px] sm:w-full">
                <div className="flex flex-col items-center justify-start px-[5.5px] w-[409px] sm:w-full">
                  <Input
                    name="input"
                    placeholder="Name"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-900_01 sm:pr-5 text-[11px] text-gray-900_01 text-left w-full"
                    wrapClassName="bg-white-A700 border border-black-900_33 border-solid pl-[15px] pr-[35px] py-3 rounded-[3px] w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start px-[5.5px] w-[409px] sm:w-full">
                  <Input
                    name="input_One"
                    placeholder="Email Address"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-900_01 sm:pr-5 text-[11px] text-gray-900_01 text-left w-full"
                    wrapClassName="bg-white-A700 border border-black-900_33 border-solid pl-[15px] pr-[35px] py-3 rounded-[3px] w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start px-[5.5px] w-[409px] sm:w-full">
                  <Input
                    name="input_Two"
                    placeholder="Subject"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-900_01 sm:pr-5 text-[10px] text-gray-900_01 text-left w-full"
                    wrapClassName="bg-white-A700 border border-black-900_33 border-solid pl-[15px] pr-[35px] py-[13px] rounded-[3px] w-full"
                  ></Input>
                </div>
                <Img
                  className="h-[108px] w-[409px]"
                  src="images/img_divelementorf.svg"
                  alt="divelementorf"
                />
                <div className="flex flex-col items-end justify-start px-[5.5px] w-[409px] sm:w-full">
                  <Button className="bg-teal-800 cursor-pointer min-w-[398px] sm:min-w-full py-[13px] rounded-[3px] text-[10px] text-center text-white-A700">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center md:px-5 w-full">
        <div className="flex flex-col items-center justify-center max-w-[1920px] w-full">
  <div className="bg-gray-100 flex flex-col items-center justify-center max-w-[1920px] md:px-10 sm:px-5 px-4 py-10 w-full">
    <div className="flex flex-col items-center justify-center max-w-[680px] md:px-10 sm:px-5 px-4 w-full">
      <Text
        className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900 w-auto whitespace-nowrap"
        size="txtInterRegular35"
      >
        Subscribe to Newsletter
      </Text>
    </div>
    <div className="flex flex-col items-center justify-center max-w-[680px] mt-7 w-full">
      <div className="flex flex-col items-center justify-center max-w-[680px] md:px-10 sm:px-5 px-4 w-full">
        <Text
          className="text-[11px] text-center text-gray-800 w-auto whitespace-nowrap"
          size="txtInterLight11"
        >
          Enter your email address to register to our newsletter subscription!
        </Text>
      </div>
    </div>
    <div className="flex flex-col font-poppins items-center justify-center max-w-[690px] mt-5 w-full">
      <div className="flex flex-col gap-2.5 items-center justify-center max-w-[690px] w-full">
        <div className="flex flex-col items-center justify-center max-w-[690px] w-full">
          <Input
            name="input"
            placeholder="Email Address"
            className="leading-[normal] p-0 placeholder:text-gray-800 text-[15px] text-gray-800 text-left w-full"
            wrapClassName="bg-white-A700 border border-black-900_2b border-solid pl-[15px] pr-[35px] py-2 rounded-[3px] w-full"
            type="email"
          ></Input>
        </div>
        <div className="flex flex-col font-inter items-center justify-center max-w-[690px] w-full">
          <Button className="bg-teal-800 cursor-pointer font-medium min-w-[103px] py-2.5 rounded-md text-[9px] text-center text-white-A700">
            Send
          </Button>
        </div>
      </div>
    </div>
  </div>


            <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1920px] md:px-10 sm:px-5 px-[390px] w-full">
              <div className="flex flex-col items-start justify-start py-2.5 w-full">
                <div className="gap-[5px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start pb-[11.59px] pl-2.5 md:pr-10 sm:pr-5 pr-[396px] pt-2.5 w-full">
                  <div className="flex flex-col items-start justify-start w-[36]">
                    <Button className="bg-gray-100 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                      <Img
                        className="h-[18px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[36]">
                    <Button className="bg-gray-100 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                      <Img
                        className="h-[18px]"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[36]">
                    <Button className="bg-gray-100 flex h-9 items-center justify-center p-[7px] rounded-[50%] w-9">
                      <Img src="images/img_youtube.svg" alt="youtube" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[36]">
                    <Button className="bg-gray-100 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                      <Img src="images/img_linkedin.svg" alt="linkedin" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactpagePage;
