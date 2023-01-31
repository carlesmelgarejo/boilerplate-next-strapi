import NavigationMenu from '../MainNavigation/MainNavigation';
import Link from "next/link";
import Image from 'next/image';
import headerImage from '../../../assets/images/common/header.jpg';
import styled from "styled-components";

export const Title = styled.h1`
  // Positioning
  position: absolute;
  top: 6%;
  left: 1%;
  transform: rotate(180deg);

  // Box model
  writing-mode: vertical-rl;

  // Typography
  font-size: 1.3rem;
  font-weight: 400;
  color: #F1AA26;
  line-height: 1;
`;

export const Subtitle = styled.p`
  // Positioning
  position: absolute;
  top: 88%;
  left: 23.5%;

  // Typography
  font-size: 1.3rem;
  font-weight: 600;
  color: #F1AA26;
  line-height: 1;
`;

const MainHeader = (props: any) => {
  return (
    <>
      <header>
        <div className="bg-[#F1AA26] h-14 text-right rounded">
          <Link href="#" className="uppercase text-white font-semibold px-4 py-5 inline-block text-sm text-[#1F6B8E]">Previous years</Link>
        </div>

        <div className="my-6 relative">
          <Image
            alt="Next.js logo"
            src={headerImage}
            width={1456}
            height={378}
            className="w-full shadow-md rounded"
            quality={90}
            placeholder="blur"
          />

          <Title>Annual Report 2020</Title>

          <Subtitle>IIIA-CSIC</Subtitle>
        </div>

        <div className="mx-auto max-w-screen-xl">
          <NavigationMenu />
        </div>
      </header>
    </>
  )
}

export default MainHeader;
