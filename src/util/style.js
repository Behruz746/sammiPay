const styles = {
  // Padding
  padding: "sm:px-[30px] sm:py-[25px] px-[15px] py-[20px]",
  paddingX: "sm:px-[30px] px-[15px]",
  paddingY: "sm:py-[80px] py-[40px]",
  // Margin
  margin: "sm:mx-[30px] sm:my-[15px] mx-[15px] my-[25px]",
  marginX: "sm:mx-[30px] mx-[15px]",
  marginY: "sm:my-[15px] my-[25px]",
  // container
  constainer: "xl:max-w-[1200px] w-full m-auto",
  // flex justify position
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end items-end",
  flexBetween: "flex justify-between items-center",
  // Text
  heading1:
    "font-montserrat font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]",
  heading2:
    "font-montserrat font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-montserrat font-normal text-lightWhite text-[18px] leading-[30.8px]",
};

const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionRevers: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionImage: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 relative`,
  sectionImageReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
};

export { styles, layout };
