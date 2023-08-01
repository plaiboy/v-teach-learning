import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";

const AboutpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[390px] w-full" />
        <div className="flex flex-col items-start justify-start max-w-[1920px] w-full">
          <div className="bg-white-A700 flex flex-col gap-3.5 items-center justify-start pb-[70px] w-full">
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[1140px] md:px-5 py-[30px] w-full">
              <div className="flex flex-1 flex-col items-start justify-center pb-[109.91px] pt-[95.89px] px-2.5 w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-[539px] sm:w-full">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[250.04px] w-[539px] sm:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[304px]"
                      size="txtInterRegular35"
                    >
                      Mission statement
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[539px] sm:w-full">
                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25.91px] w-[539px] sm:w-full">
                      <Text
                        className="leading-[24.00px] text-[11px] text-gray-800"
                        size="txtInterLight11"
                      >
                        <>
                          At V-Teach, our mission is to provide a high-quality
                          online learning platform that offers a diverse
                          <br />
                          range of courses to individuals seeking to enhance
                          their knowledge and skills. We aim to create a<br />
                          dynamic and interactive learning environment that
                          fosters personal growth and professional
                          <br />
                          development. Through our commitment to excellence and
                          innovation, we strive to empower learners
                          <br />
                          worldwide to achieve their educational goals and
                          unlock their full potential.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-center p-2.5 w-full">
                <Img
                  className="h-[366px] sm:h-auto object-cover rounded-md w-[550px] md:w-full"
                  src="images/img_israelandrade.png"
                  alt="israelandrade"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1920px] pt-[66px] md:px-10 sm:px-5 px-[390px] w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start max-w-[1140px] pb-2.5 px-2.5 w-full">
                  <div className="flex flex-col items-start justify-start max-w-[1120px] md:pr-10 sm:pr-5 pr-[968.07px] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto whitespace-nowrap"
                      size="txtInterRegular36"
                    >
                      Our Team
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start max-w-[1120px] md:pr-10 sm:pr-5 pr-[236px] w-full">
                    <Text
                      className="text-[11px] text-gray-800 w-auto"
                      size="txtInterLight11"
                    >
                      V-Teach was founded by a group of passionate educators
                      with a vision to provide high-quality online courses and
                      empower individuals to expand their knowledge and skills.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1920px] mt-[13px] md:px-10 sm:px-5 px-[390px] w-full">
                <div className="flex flex-col items-start justify-start pb-[70px] w-full">
                  <div className="flex flex-col items-start justify-center pb-[26.27px] md:pr-10 sm:pr-5 pr-[150px] pt-[26.25px] w-[571px] sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start pt-10 w-[422px] sm:w-full">
                      <div className="flex flex-col items-start justify-center p-2.5 w-[206px]">
                        <Img
                          className="h-[279px] md:h-auto object-cover rounded-md w-[186px] sm:w-full"
                          src="images/img_teammember1s.png"
                          alt="teammember1s"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-center pb-[13.75px] sm:pl-5 pl-[30px] pt-[13.73px] w-[206px]">
                        <div className="flex flex-col items-start justify-start pr-[15.66px] w-[175px]">
                          <Text
                            className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto whitespace-nowrap"
                            size="txtInterRegular22"
                          >
                            Veronica Mbaka
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-44">
                          <div className="flex flex-col items-start justify-start pr-[11.66px] w-44">
                            <Text
                              className="leading-[24.00px] text-[11px] text-gray-800"
                              size="txtInterLight11"
                            >
                              <>
                                With a deep understanding of
                                <br />
                                the Chemistry/Maths combination and a<br />
                                passion for continuous learning,
                                <br />I bring years of experience in
                                <br />
                                curriculum development and
                                <br />
                                instructional design to ensure a<br />
                                high-quality online learning
                                <br />
                                experience for students on V-
                                <br />
                                Teach.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start max-w-[1140px] mt-[140px] pb-[70px] md:px-5 w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-center p-[9px] w-[43%] md:w-full">
                  <div className="flex flex-col items-start justify-start mt-[124px] md:pr-10 sm:pr-5 pr-[194.13px] w-[471px] sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto whitespace-nowrap"
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

export default AboutpagePage;
