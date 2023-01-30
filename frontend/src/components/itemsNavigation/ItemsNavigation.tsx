import Link from "next/link";

const ItemsNavigationMenu = () => {
  const items = [
    { id: "1", title: "Item1"},
    { id: "2", title: "Item2"},
    { id: "3", title: "Item3"},
  ]

  return (
    <nav>
      <ul>
        {items.map(item => <li key={item.id}>
          <Link href={`/items/${item.id}`}>{item.title}</Link>
        </li>)}
      </ul>
    </nav>
  )
}

export default ItemsNavigationMenu;
