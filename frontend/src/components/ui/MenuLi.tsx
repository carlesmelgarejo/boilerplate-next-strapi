const MenuLi = (props: {children: JSX.Element}) => {
    return (
        <li className="rounded-2xl px-4 py-2 bg-slate-300 opacity-70 hover:opacity-100 font-semibold">
            {props.children}
        </li>
    );
}

export default MenuLi;