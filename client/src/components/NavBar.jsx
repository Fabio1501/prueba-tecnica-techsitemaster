import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        setOpen(false)
    }, [])

    return (
        <div className="w-full text-gray-700 bg-black">
            <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
                <div className="flex flex-row items-center justify-between py-8">
                    <div className="relative">
                        <Link to="/" className="text-lg relative z-50 font-bold tracking-widest text-white rounded-lg focus:outline-none focus:shadow-outline">ContratameYA!</Link>
                        <svg className="h-11 z-40 absolute -top-2 -left-3" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z" fill="red" />
                        </svg>
                    </div>
                </div>
                <nav className={`${!open ? 'transform md:transform-none' : 'h-full'} h-0 md:h-auto flex flex-col flex-grow md:items-center md:flex md:justify-end md:flex-row origin-top duration-300 scale-y-0`}>
                    <Link className="px-10 py-3 text-sm text-center bg-white text-gray-800 rounded-full  md:ml-4" to="/create">Crear cliente</Link>
                    <Link className="px-10 py-3 text-sm text-center bg-red-600 text-white rounded-full  md:ml-4" to="/view">Ver clientes</Link>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;
