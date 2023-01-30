import Link from "next/link";
import MenuLi from "@/components/ui/MenuLi";

const NavigationMenu = () => {
  return (
    <nav className="mx-auto">
      <aside>
        <ul className="flex items-center justify-evenly gap-x-2.5">
          <MenuLi>
            <Link href="/welcome">
              Welcome
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/about">
              About
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/history">
              History
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/science">
              Science
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/projects">
              Projects
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/publications">
              Publications
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/theses">
              Theses
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/knowledge-transfer">
              Knowledge Transfer
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/communication">
              Communication
            </Link>
          </MenuLi>
          <MenuLi>
            <Link href="/towards-the-future">
              Towards the future
            </Link>
          </MenuLi>
        </ul>
      </aside>
    </nav>
  )
}

export default NavigationMenu;
