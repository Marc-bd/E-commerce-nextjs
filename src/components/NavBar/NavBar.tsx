import {RiMenu5Fill, RiShoppingBagLine, RiUser3Line} from "react-icons/ri";


export default function NavBar(){
    return (
        <nav className={"px-8 bg-white h-12 flex justify-center items-center"}>
            <div>
                <RiMenu5Fill className={"text-3xl"}/>
            </div>
            <div>
                <h1>
                    Nice Store
                </h1>
            </div>
            <div>
                <RiShoppingBagLine/>
                <RiUser3Line/>
            </div>
        </nav>
    )
}