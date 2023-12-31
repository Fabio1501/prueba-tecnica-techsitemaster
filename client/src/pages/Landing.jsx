import girl from '../assets/girl.png'
import uxClass from '../assets/ux-class.svg'
import calendar from '../assets/calendar.svg'
import congrat from "../assets/congrat.svg"
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-20 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1 className="my-4 text-[44px] font-bold leading-tight text-white">
            <span className="text-red-600">Crear clientes<br></br></span> ahora es mucho más fácil <span className="text-red-600">ContratameYA!</span>
          </h1>
          <p className="text-white leading-normal text-2xl mb-8">ContratameYA! Es una prueba técnica interesante que cautivará a los entrevistadores.</p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <Link to={'/create'} className="lg:mx-0 bg-red-600 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Crear cliente
            </Link>
            <Link to={'/view'}  className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="red" />
                </svg>
              </div>
              <span className="cursor-pointer text-white">Ver clientes</span>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:-mt-12 relative">
          <img className="w-9/12 mx-auto 2xl:-mb-20" src={girl} />
        </div>
      </div>
    </div>
  )
}
export default Landing;
