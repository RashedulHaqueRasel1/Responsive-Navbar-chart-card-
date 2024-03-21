import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

export default function NavBar() {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }];


    return (
        <div>
            <div className="md:hidden bg-purple-500  p-6" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdClose className="text-2xl" />  : <IoMenu className="text-2xl "/>
                }
               
                
 
                
            </div>

            <ul className={`md:flex absolute md:static p-4 ml-10 md:ml-0  duration-1000 bg-rose-700  rounded-lg md:rounded-none ${ open === true ? 'top-16' : '-top-60'}`}>

                {
                    routes.map(route => <Link  
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>

        </div>
    )
}
