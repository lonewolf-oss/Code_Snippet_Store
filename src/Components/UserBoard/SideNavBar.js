const SideNavBar = (props) => {
    return (
        <aside className="fixed py-10 left-4 min-h-screen w-56 text-center">
            <ul className="list-none">

                {props.userDataArray.map((val,key)=>{return <li key={key}><a href={"#"+val.code_title.toLowerCase().split(" ").join("")} className="block mt-4 font-bold rounded-lg border-2 border-black py-2 hover:bg-violet-500 transition-bg duration-300">{val.code_title}</a></li>})}
            </ul>
        </aside>
    );
}

export default SideNavBar;