import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";

const ServicespagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[390px] w-full" />
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1920px] w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1920px] pb-[70px] w-full">
          <div className="bg-gray-100 flex flex-col items-start justify-start pb-10 pt-14 md:px-8 sm:px-5 px-4 md:w-4/5 xl:w-3/5 2xl:w-2/5 mx-auto">
              <div className="flex flex-col gap-5 items-center justify-end py-2.5 w-full">
                <div className="flex flex-col items-start justify-start max-w-[1120px] mt-[13px] md:pr-10 sm:pr-5 pr-[942.05px] pt-[86px] w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto whitespace-nowrap"
                    size="txtInterRegular36"
                  >
                    All Services
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1150px] pb-10 pt-5 w-full">
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1150px] pb-[35px] px-[15px] w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-3.5 items-center justify-start pb-[11px] w-full">
                      <div className="flex flex-col items-start justify-start w-[353px]">
                        <Img
                          className="h-[353px] md:h-auto object-cover w-full"
                          src="images/img_lcsvgttioezt.png"
                          alt="lcsvgttioezt"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[115.33px] w-[353px]">
                        <Text
                          className="text-[13px] text-gray-900 w-auto"
                          size="txtInterMedium13"
                        >
                          Expert Coaching and Career Guidance
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-[23.33px] w-[353px]">
                        <Text
                          className="leading-[24.00px] text-[11px] text-gray-800"
                          size="txtInterLight11"
                        >
                          <>
                            Our coaching and career guidance service provides
                            professional
                            <br />
                            support and guidance to help individuals achieve
                            their career
                            <br />
                            goals.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[301.33px] w-[353px]">
                        <Text
                          className="text-[10px] text-teal-800 w-auto"
                          size="txtInterRegular10"
                        >
                          Read More
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3.5 items-center justify-start pb-[11px] w-full">
                      <div className="flex flex-col items-start justify-start w-[353px]">
                        <Img
                          className="h-[353px] md:h-auto object-cover w-full"
                          src="images/img_norbertkundrak.png"
                          alt="norbertkundrak"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[55.33px] w-[353px]">
                        <Text
                          className="text-[13px] text-gray-900 w-auto"
                          size="txtInterMedium13"
                        >
                          Interactive Live Sessions for Enhanced Learning
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-[32.33px] w-[353px]">
                        <Text
                          className="leading-[24.00px] text-[11px] text-gray-800"
                          size="txtInterLight11"
                        >
                          <>
                            Our Live Sessions service offers interactive and
                            informative
                            <br />
                            sessions with industry experts, providing valuable
                            insights and
                            <br />
                            knowledge.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[301.33px] w-[353px]">
                        <Text
                          className="text-[10px] text-teal-800 w-auto"
                          size="txtInterRegular10"
                        >
                          Read More
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3.5 items-center justify-start pb-[11px] w-full">
                      <div className="flex flex-col items-start justify-start w-[353px]">
                        <Img
                          className="h-[353px] md:h-auto object-cover w-full"
                          src="images/img_pexelssantiago.png"
                          alt="pexelssantiago"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25.34px] w-[353px]">
                        <Text
                          className="text-[13px] text-gray-900 w-auto"
                          size="txtInterMedium13"
                        >
                          Comprehensive Online Courses for Lifelong Learning
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-[10.34px] w-[353px]">
                        <Text
                          className="leading-[24.00px] text-[11px] text-gray-800"
                          size="txtInterLight11"
                        >
                          <>
                            Our full courses service offers a comprehensive
                            selection of formal
                            <br />
                            and structured courses to help you gain expertise in
                            various fields.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[301.34px] w-[353px]">
                        <Text
                          className="text-[10px] text-teal-800 w-auto"
                          size="txtInterRegular10"
                        >
                          Read More
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start pb-[70px] md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-center p-2.5 w-[43%] md:w-full">
                <div className="flex flex-col items-start justify-start mt-[124px] md:pr-10 sm:pr-5 pr-[194.13px] w-[470px] sm:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                    size="txtInterRegular36"
                  >
                    Happy Customers
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[470px] sm:w-full">
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[33.66px] w-[470px] sm:w-full">
                    <Text
                      className="leading-[24.00px] text-[11px] text-gray-800"
                      size="txtInterLight11"
                    >
                      <>
                        Our commitment to providing high-quality courses and
                        exceptional customer support
                        <br />
                        sets us apart and keeps our customers coming back.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[124px] md:pr-10 sm:pr-5 pr-[315.8px] w-[470px] sm:w-full">
                  <Button className="bg-teal-800 cursor-pointer min-w-[154px] py-4 rounded-md text-[10px] text-center text-white-A700">
                    View All Testimonials
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-center p-2.5 w-[624px] md:w-full">
                <Img
                  className="h-[420px] sm:h-auto object-cover rounded-md w-[604px] md:w-full"
                  src="images/img_pexelsfauxels.png"
                  alt="pexelsfauxels"
                />
              </div>
            </div>
          </div>
        </div>
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
                  Enter your email address to register to our newsletter
                  subscription!
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
              <List
                className="sm:flex-col flex-row gap-[5px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start pb-[11.59px] pl-2.5 md:pr-10 sm:pr-5 pr-[396px] pt-2.5 w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Button className="bg-gray-100 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                    <Img
                      className="h-[18px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Button className="bg-gray-100 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                    <Img
                      className="h-[18px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Button className="bg-gray-100 flex h-9 items-center justify-center p-[7px] rounded-[50%] w-9">
                    <Img src="images/img_youtube.svg" alt="youtube" />
                  </Button>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Button className="bg-gray-100 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                    <Img src="images/img_linkedin.svg" alt="linkedin" />
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicespagePage;
