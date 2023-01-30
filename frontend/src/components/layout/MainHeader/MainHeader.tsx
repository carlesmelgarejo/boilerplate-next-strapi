import NavigationMenu from '../MainNavigation/MainNavigation';
import Link from "next/link";
import Image from 'next/image';
import headerImage from '../../../assets/images/common/home-top.jpg'

const MainHeader = (props: any) => {
  return (
    <>
      <header>
        <div className="bg-[#adb6a2] h-14 text-right">
          <Link href="#" className="uppercase text-white font-semibold px-4 py-5 inline-block text-sm">Previous years</Link>
        </div>

        <div className="my-10 relative">
          <Image
            alt="Next.js logo"
            src={headerImage}
            width={1200}
            height={400}
            placeholder="blur"
            className="w-full shadow-md"
          />
          <div className="absolute top-1/2 left-1/2 text-white translate-x-[-50%] translate-y-[-50%]">
            <p className="text-center">IIIA-CSIC</p>
            <h1 className="text-center text-5xl">
              <Link href="/">
                Annual Report 2020
              </Link>
            </h1>          
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl">
          <NavigationMenu />
        </div>
      </header>
    </>
  )
}

export default MainHeader;
