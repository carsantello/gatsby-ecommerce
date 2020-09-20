import React from 'react';
import { Link } from 'gatsby';

const navItems = [
    {
        caption: "Home",
        href: "/"
    },
    {
        caption: "Products",
        href: "/products"
    },
    {
        caption: "Site map",
        href:""
    }
]
export default (props) => {
    return (
        <header className="bg-blue-900 text-blue-100 shadow-md">
            <nav>
                <ul className = "flex">
                    {
                        navItems.map((item)=>
                         (<li> 
                            <Link className="hover:bg-blue-700 px-6 inline-block py-4" to={item.href}> {item.caption} </Link> 
                          </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}