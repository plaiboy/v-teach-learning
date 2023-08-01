import { useEffect, useState } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import {db} from '..//../config/firebase';
import { getDocs, collection } from "firebase/firestore";


const LandingpagePage = () => {
  const [courseList, setCourseList] = useState([]);

  const courseCollectionRef = collection(db, 'Courses');
      useEffect(() =>{
        const getCourseList = async() =>{
          try {
            const data = await getDocs(courseCollectionRef);
            const filterdeData = data.docs.map((doc) =>({
              ...doc.data(),
              id: doc.id,
            }));
            setCourseList(filterdeData);
          } catch (err) {
            console.error(err)
            
          }

        }
        getCourseList();
      }, []);

  


  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
      <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[390px] w-full" />
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1920px] w-full">
          <div className="flex flex-col items-center justify-start pb-5 w-full">
          <div className="bg-gray-100 flex flex-col items-start justify-start max-w-screen-lg mx-auto md:px-10 sm:px-5 px-4">
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-center pb-[50px] pt-[100px] w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start p-2.5 w-[600px] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[580px] sm:w-full">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[91.7px] w-[580px] sm:w-full">
                      <Text
                        className="leading-[60.00px] sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 whitespace-nowrap"
                        size="txtInterRegular44"
                      >
                        <>
                          Digital Academy:
                          <br />
                          Empowering Education,
                          <br />
                          Anywhere
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 w-[580px] sm:w-full">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[42.7px] w-[580px] sm:w-full">
                      <Text
                        className="leading-[24.00px] text-[11px] text-gray-800"
                        size="txtInterLight11"
                      >
                        <>
                          Welcome to V-Teach, the premier online learning
                          platform offering a diverse range of courses to
                          enhance
                          <br />
                          your knowledge and skills.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[448.11px] pt-2.5 w-[580px] sm:w-full">
                    <Button className="bg-teal-800 cursor-pointer min-w-[132px] py-[21px] rounded-md text-[10px] text-center text-white-A700">
                      View All Services
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col items-start justify-center pl-[138.89px] pr-[68.91px] md:px-10 sm:px-5 py-[21.25px] w-[529px] sm:w-full">
                  <Img
                    className="h-auto md:h-[321px] object-cover rounded-md w-full"
                    src="images/img_aronpwbc40m7sk.png"
                    alt="aronpwbc40m7sk"
                  />
                </div>
              </div>
            </div>
            <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start max-w-[1120px] mt-[130px] p-2.5 md:px-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-center pb-[15.06px] pl-2.5 md:pr-10 sm:pr-5 pr-[83px] pt-[15.05px] w-full">
                <Text
                  className="text-[15px] text-gray-900 w-auto"
                  size="txtInterSemiBold15"
                >
                  Featured In
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-start justify-center pl-[21.63px] pr-[21.62px] sm:px-5 py-2.5 w-full">
                <Img
                  className="h-[30px] md:h-auto object-cover w-[131px] sm:w-full"
                  src="images/img_untitleddesign9fzdo9ncwebp.png"
                  alt="untitleddesignNine"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center pl-[21.63px] pr-[21.62px] sm:px-5 py-[12.97px] w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-[131px] sm:w-full"
                  src="images/img_logoipsum28619fzdo9ncwebp.png"
                  alt="logoipsum28619f"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center pb-[10.55px] pl-[21.63px] pr-[21.62px] pt-[10.53px] sm:px-5 w-full">
                <Img
                  className="h-[29px] md:h-auto object-cover w-[131px] sm:w-full"
                  src="images/img_logoipsum23719fzdo9ncwebp.png"
                  alt="logoipsum23719f"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center pb-[10.7px] pl-[21.63px] pr-[21.62px] pt-[10.69px] sm:px-5 w-full">
                <Img
                  className="h-7 md:h-auto object-cover w-[131px] sm:w-full"
                  src="images/img_logoipsum2229fzdo9ncwebp.png"
                  alt="logoipsum2229fz"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-center pb-[16.87px] pl-[21.63px] pr-[21.62px] pt-[16.88px] sm:px-5 w-full">
                <Img
                  className="h-4 md:h-auto object-cover w-[131px] sm:w-full"
                  src="images/img_logoipsum2199fzdo9ncwebp.png"
                  alt="logoipsum2199fz"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[1140px] mt-20 pb-[70px] pt-[50px] md:px-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start pb-[41px] pt-2.5 px-2.5 w-full">
                <List
                  className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 grid-cols-2 justify-start p-2.5 w-[545px] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[187.78px] w-[237px]">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                        size="txtInterRegular36"
                      >
                        4.8
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.5px] w-[237px]">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-[72px]"
                        src="images/img_heading6.png"
                        alt="headingSix"
                      />
                    </div>
                    <div className="flex flex-col font-poppins items-start justify-start md:pr-10 sm:pr-5 pr-[133.5px] w-[237px]">
                      <Text
                        className="text-[15px] text-gray-900 w-auto whitespace-nowrap"
                        size="txtPoppinsBold15"
                      >
                        2,394 Ratings
                      </Text>
                    </div>
                    <div className="flex flex-col font-poppins items-start justify-start mb-[3px] md:pr-10 sm:pr-5 pr-[116.5px] w-[237px]">
                      <Text
                        className="text-[15px] text-gray-900 w-auto whitespace-nowrap"
                        size="txtPoppinsBold15"
                      >
                        Google Reviews
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start px-2.5 w-full">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[178.89px] w-[237px]">
                      <Text
                        className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900 w-auto"
                        size="txtInterRegular45"
                      >
                        A+
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[5px] md:pr-10 sm:pr-5 pr-[163.5px] w-[237px]">
                      <Img
                        className="h-[17px] md:h-auto object-cover w-[72px]"
                        src="images/img_heading6.png"
                        alt="headingSix"
                      />
                    </div>
                    <div className="flex flex-col font-poppins items-start justify-start mt-[9px] md:pr-10 sm:pr-5 pr-[146.5px] w-[237px]">
                      <Text
                        className="text-[15px] text-gray-900 w-auto whitespace-nowrap"
                        size="txtPoppinsBold15"
                      >
                        125 Reviews
                      </Text>
                    </div>
                    <div className="flex flex-col font-poppins items-start justify-start mt-3.5 md:pr-10 sm:pr-5 pr-[153.5px] w-[237px]">
                      <Text
                        className="text-[15px] text-gray-900 w-auto whitespace-nowrap"
                        size="txtPoppinsBold15"
                      >
                        BBB Rating
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start p-0.5 w-1/2 md:w-full">
                <div className="flex flex-col items-start justify-start mt-2 w-[545px] sm:w-full">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[89px] w-[545px] sm:w-full">
                    <Text
                      className="leading-[36.00px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-900"
                      size="txtInterRegular21"
                    >
                      <>
                        Trusted by numerous Students, Professionals,
                        <br />
                        Lifelong Learners
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-2 px-2.5 py-[9px] w-[545px] sm:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[442px] w-[525px] sm:w-full">
                      <Text
                        className="text-orange-200 text-xs w-auto"
                        size="txtInterMedium12"
                      >
                        Jessica Simon
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[525px] sm:w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[76px] w-[525px] sm:w-full">
                        <Text
                          className="leading-[24.00px] text-[11px] text-gray-800"
                          size="txtInterLight11"
                        >
                          <>
                            I absolutely love this online learning platform, it
                            offers a wide variety of courses that are
                            <br />
                            informative, engaging, and easy to navigate.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1920px] pb-[50px] pt-[70px] md:px-10 sm:px-5 px-4 w-full md:pb-10 md:pt-20">
              <div className="flex flex-col items-center justify-end py-2.5 w-full">
                <div className="flex md:flex-col flex-row gap-2.5 items-end justify-start max-w-[1120px] mt-[3px] pb-2.5 px-2.5 w-full">
                  <div className="flex flex-1 flex-col items-start justify-start max-w-[827px] pb-[22px] md:pr-10 sm:pr-5 pr-[633.38px] w-full">
                    <Text
                      className="text-4xl sm:text-[36px] md:text-[34px] text-gray-900 w-auto whitespace-nowrap"
                      size="txtInterRegular36"
                    >
                      Our Services
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end md:pl-10 sm:pl-5 pl-[132.24px] pt-1.5 w-[264px]">
                    <Button className="bg-teal-800 cursor-pointer min-w-[132px] py-4 rounded-md text-[10px] text-center text-white-A700">
                      View All Courses
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1920px] mt-[27px] pt-10 w-full">
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center items-centermax-w-[1150px] pb-[35px] pl-[20px] pr-[15px] w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-3.5 items-center justify-start pb-[5px] w-full">
                      <div className="flex flex-col items-start justify-center w-[353px]">
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
                    <div className="flex flex-1 flex-col gap-3.5 items-center justify-start pb-[5px] w-full">
                      <div className="flex flex-col items-start justify-start w-[353px]">
                        {/* <Img
                          className="h-[353px] md:h-auto object-cover w-full"
                          src="images/img_norbertkundrak.png"
                          alt="norbertkundrak"
                        /> */}

                        {courseList.map((course) => (
                          <div>
                          <h1> {course.title}</h1>
                          </div>
                        ))}
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
                    <div className="flex flex-1 flex-col gap-3.5 items-center justify-start pb-[5px] w-full">
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
                <div className="flex flex-col gap-5 items-center justify-start mt-5 w-[98%] md:w-full">
                  <div className="flex flex-col items-start justify-start max-w-[1120px] py-[15px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <Line className="bg-black-900 h-px md:mt-0 my-2 w-[45%]" />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-gray-800 text-xs w-auto"
                          size="txtInterLight12"
                        >
                          Features & Benefits
                        </Text>
                      </div>
                      <Line className="bg-black-900 h-px md:mt-0 my-2 w-[45%]" />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[1120px] py-10 w-full">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[9px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-5 items-start justify-start pb-[140.67px] pt-2.5 px-2.5 w-full">
                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[255.67px] w-[346px]">
                          <Text
                            className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                            size="txtInterRegular22"
                          >
                            Features
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[346px]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[346px]">
                            <div className="flex flex-row items-center justify-start pb-[5px] md:pr-10 sm:pr-5 pr-[152.97px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[7.2px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  Wide range of courses available
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start pb-[5px] md:pr-10 sm:pr-5 pr-[204.81px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_One"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[3.36px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  User-friendly interface
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start pb-[5px] md:pr-10 sm:pr-5 pr-[166.69px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_Two"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[1.48px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  Accessible anytime, anywhere
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start pb-[5px] md:pr-10 sm:pr-5 pr-[166.28px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_Three"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[9.89px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  Interactive learning materials
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[155.61px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_Four"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[1.56px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  Certified instructors and experts
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start pb-[92.67px] pt-2.5 px-2.5 w-full">
                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[260.67px] w-[346px]">
                          <Text
                            className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                            size="txtInterRegular22"
                          >
                            Benefits
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[346px]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[346px]">
                            <div className="flex flex-row items-center justify-start pb-[5px] pr-[19.36px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[3.81px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  Access to a wide range of courses from various
                                  disciplines
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start pb-[5px] pr-[0.44px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_One"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[15.73px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  Convenient and flexible learning options for
                                  busy individuals
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start pb-[5px] md:pr-10 sm:pr-5 pr-[65.67px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_Two"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] pr-[4.5px] w-auto">
                                <Text
                                  className="text-[11px] text-gray-800 w-auto"
                                  size="txtInterLight11"
                                >
                                  High-quality and expertly curated course
                                  content
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start pb-[5px] w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_Three"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] md:pr-10 sm:pr-5 pr-[67.17px] w-auto">
                                <Text
                                  className="leading-[24.00px] text-[11px] text-gray-800"
                                  size="txtInterLight11"
                                >
                                  <>
                                    Interactive and engaging learning experience
                                    with
                                    <br />
                                    multimedia resources
                                  </>
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start w-[346px]">
                              <Img
                                className="h-3.5 w-[17px]"
                                src="images/img_eye.svg"
                                alt="eye_Four"
                              />
                              <div className="flex flex-col items-start justify-start pl-[5px] sm:pr-5 pr-[39.17px] w-auto">
                                <Text
                                  className="leading-[24.00px] text-[11px] text-gray-800"
                                  size="txtInterLight11"
                                >
                                  <>
                                    Opportunity to enhance professional skills
                                    and advance
                                    <br />
                                    career prospects.
                                  </>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col items-start justify-center p-2.5 w-[366px]">
                      <Img
                        className="h-[346px] md:h-auto object-cover rounded-md w-[346px]"
                        src="images/img_pexelsmatheus.png"
                        alt="pexelsmatheus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[7px] items-start justify-start max-w-[1140px] mt-[79px] pb-2.5 px-2.5 md:px-5 w-full">
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
                  V-Teach was founded by a group of passionate educators with a
                  vision to provide high-quality online courses and empower
                  individuals to expand their knowledge and skills.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1140px] mt-[13px] pb-[70px] md:px-5 w-full">
              <div className="flex flex-col items-start justify-center px-2.5 py-[17.97px] w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start pt-10 w-[545px] sm:w-full">
                  <div className="flex flex-col items-start justify-center p-2.5 w-full">
                    <Img
                      className="h-80 md:h-auto object-cover rounded-md w-[213px] sm:w-full"
                      src="images/img_teammember1s.png"
                      alt="teammember1s"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-center pl-[25px] md:pr-10 pr-[110px] sm:px-5 py-[22.03px] w-full">
                    <div className="flex flex-col items-start justify-start pr-[6.63px] w-[174px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                        size="txtInterRegular22"
                      >
                        Veronaca Mbaka
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[166px]">
                      <div className="flex flex-col items-start justify-start pr-[10.63px] w-[166px]">
                        <Text
                          className="leading-[24.00px] text-[11px] text-gray-800"
                          size="txtInterLight11"
                        >
                          <>
                            With a deep understanding of
                            <br />
                            Chemistry/Maths and a<br />
                            passion for continuous
                            <br />
                            learning, I bring years of
                            <br />
                            experience in curriculum
                            <br />
                            development and instructional
                            <br />
                            design to ensure a high-
                            <br />
                            quality online learning
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
            <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start max-w-[1120px] mt-[30px] pb-[70px] md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-center p-2.5 w-[43%] md:w-full">
                <div className="flex flex-col items-start justify-start mt-[120px] md:pr-10 sm:pr-5 pr-[185.33px] w-[461px] sm:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                    size="txtInterRegular36"
                  >
                    Happy Customers
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[461px] sm:w-full">
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[24.86px] w-[461px] sm:w-full">
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
                <div className="flex flex-col items-start justify-start mb-[120px] md:pr-10 sm:pr-5 pr-[307px] w-[461px] sm:w-full">
                  <Button className="bg-teal-800 cursor-pointer min-w-[154px] py-4 rounded-md text-[10px] text-center text-white-A700">
                    View All Testimonials
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-center p-2.5 w-[613px] md:w-full">
                <Img
                  className="h-[412px] sm:h-auto object-cover rounded-md w-[593px] md:w-full"
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

export default LandingpagePage;
