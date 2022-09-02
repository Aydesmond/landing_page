import React from "react";

import { Row, Stack, Img, Column, Text, Button } from "components";

const LandingpagePage = () => {
  return (
    <>
      <Row
        className="bg-cover bg-repeat bg-white_A700 font-opensans justify-end mx-[auto] 2xl:pb-[103px] 3xl:pb-[124px] lg:pb-[80px] xl:pb-[92px] 2xl:px-[103px] 3xl:px-[124px] lg:px-[80px] xl:px-[92px] w-[100%]"
        style={{ backgroundImage: "url('images/img_landingpage.png')" }}
      >
        <Stack className="lg:h-[568px] xl:h-[650px] 2xl:h-[731px] 3xl:h-[877px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[92%]">
          <Stack className="absolute bottom-[0] lg:h-[528px] xl:h-[604px] 2xl:h-[679px] 3xl:h-[815px] w-[100%]">
            <Stack className="absolute bottom-[0] lg:h-[470px] xl:h-[538px] 2xl:h-[605px] 3xl:h-[726px] left-[0] w-[59%]">
              <Img
                src="images/img_curvedlinesde.png"
                className="absolute bottom-[0] lg:h-[270px] xl:h-[308px] 2xl:h-[347px] 3xl:h-[416px] w-[100%]"
                alt="curvedlinesde"
              />
              <Img
                src="images/img_food1.png"
                className="absolute lg:h-[459px] xl:h-[525px] 2xl:h-[590px] 3xl:h-[708px] inset-y-[0] left-[0] my-[auto] w-[91%]"
                alt="foodOne"
              />
            </Stack>
            <Column className="absolute bottom-[11%] right-[0] w-[31%]">
              <Text className="font-coolvetica font-normal leading-[91.30%] not-italic xl:text-[100px] 2xl:text-[112px] 3xl:text-[135px] lg:text-[87px] text-white_A700 w-[100%]">
                it’s this
                <br />
                simple.
              </Text>
              <Text className="font-opensans font-semibold leading-[142.30%] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:text-[19px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-amber_300 w-[83%]">
                FEATURING OUR NEW
                <br />
                SPECIAL NOODLES ROLL!
              </Text>
              <Row className="font-opensans items-center ml-[4px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[55%]">
                <Button className="font-semibold lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-center w-[73%]">
                  Details
                </Button>
                <Stack className="bg-orange_500 lg:h-[52px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:px-[15px] xl:px-[17px] 2xl:px-[19px] 3xl:px-[23px] w-[27%]">
                  <Img
                    src="images/img_arrowright.svg"
                    className="absolute lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[23%]"
                    alt="arrowright"
                  />
                </Stack>
              </Row>
            </Column>
            <Row className="absolute right-[3%] top-[0] w-[84%]">
              <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Home
              </Text>
              <Text className="font-semibold lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Menu
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[8px] ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[1%]"
                alt="arrowdown"
              />
              <Text className="font-semibold lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[67px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Order
              </Text>
              <Text className="font-semibold lg:ml-[271px] xl:ml-[310px] 2xl:ml-[349px] 3xl:ml-[419px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Cathering
              </Text>
              <Text className="font-semibold lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[67px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                About
              </Text>
              <Text className="font-semibold lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[67px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Location
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[3px] lg:ml-[3px] 3xl:ml-[4px] 2xl:ml-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[1%]"
                alt="arrowdown One"
              />
            </Row>
          </Stack>
          <Img
            src="images/img_ramenchef1.png"
            className="absolute lg:h-[117px] xl:h-[134px] 2xl:h-[150px] 3xl:h-[180px] right-[37%] top-[0] w-[18%]"
            alt="ramenchefOne"
          />
        </Stack>
        <Img
          src="images/img_location.svg"
          className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:ml-[56px] xl:ml-[65px] 2xl:ml-[73px] 3xl:ml-[87px] lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[1%]"
          alt="location One"
        />
      </Row>
    </>
  );
};

export default LandingpagePage;
