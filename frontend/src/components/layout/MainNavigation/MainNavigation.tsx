import Link from "next/link";
import MenuLi from "@/components/ui/MenuLi";
import { useEffect, useState } from "react";
import { fetchQuery } from "@/helpers/utils";
import { loadPages } from "@/helpers/load-pages";
import { style } from './style.css';



const NavigationMenu = (props: any) => {
  /*
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSlugs, setLoadedSlugs] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:1337/api/pages'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const slugs = [] as any;
        for (const key in data) {
          const slug = {
            id: key,
            ...data[key]
          }

          slugs.push(slug);
        }
        setIsLoading(false);
        setLoadedSlugs(slugs);
      });
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  console.log(loadedSlugs[0]);
  */
 
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
