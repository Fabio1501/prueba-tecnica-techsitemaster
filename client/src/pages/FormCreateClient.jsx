import { useEffect, useState } from "react";
import axios from "axios";
import { clientObject, latinAmericanCountries, validationForm } from "../components/utils";
import chaos from '../assets/ccchaos.svg'
import Alert from "../components/Alert";
import Loader from "../components/Loader";


const FormCreateClient = () => {

  const [hiddenDropdown, setHiddenDropdown] = useState(true)
  const [hiddenAlertObject, setHiddenAlertObject] = useState({
    isHidden: true,
    text: 'Hubo un error, intentalo de nuevo.',
    isSuccess: false
  })

  const [hiddenLoaderObject, setHiddenLoaderObject] = useState(true)

  const [clientTemplate, setClientTemplate] = useState(clientObject)
  const [codeOption, setCodeOption] = useState('+54')

  const [errors, setErrors] = useState({})

  const handleHiddenDropdown = (e) => {
    e.preventDefault()
    setHiddenDropdown(!hiddenDropdown)
  }

  const handleChange = (e) => {
    setClientTemplate({
      ...clientTemplate,
      [e.target.name]: e.target.value
    })
    setErrors(
      validationForm({
        ...clientTemplate,
        [e.target.name]: e.target.value,
      }),
    )
  }

  const formatedDate = (dateForm) => {
    const date = new Date(dateForm);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate() + 1).toString().padStart(2, '0');
    const formatted = `${year}-${month}-${day}T00:00:00Z`;
    return formatted
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!errors || !Object.entries(errors).length) {
        const dateOfBirth = formatedDate(clientTemplate.dateOfBirth)
        const celPhone = `${codeOption}${clientTemplate.celPhone}`

        const body = {
          ...clientTemplate,
          dateOfBirth,
          celPhone
        }
        setHiddenLoaderObject(false)
        await axios.post("https://contratameya.onrender.com/user/newuser", body)
        setClientTemplate(clientObject)
        setHiddenLoaderObject(true)
        setHiddenAlertObject({
          isHidden: false,
          text: '¡Se creó el cliente con éxito!',
          isSuccess: true
        })
      }
    } catch (error) {
      setHiddenAlertObject({
        ...hiddenAlertObject,
        isHidden: false
      })
    } finally {
      setTimeout(() => {
        setHiddenAlertObject({
          ...hiddenAlertObject,
          isHidden: true
        })
      }, 3000);
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="hidden lg:flex w-1/2 h-screen bg-black items-center justify-center">
        <img src={chaos} alt="" className="w-3/4" />
      </div>
      <div className="w-full lg:w-1/2 h-screen p-6 flex flex-col items-center gap-y-16">
        <h3 className="text-3xl font-black">Aquí puedes crear el cliente</h3>
        <form onSubmit={handleSubmit} className="w-full lg:w-3/4 flex flex-col gap-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 pointer-events-none inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 " placeholder="name@flowbite.com"
              name="email"
              value={clientTemplate.email}
              onChange={handleChange}
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold text-sm'>{errors?.email}</span>
          )}
          <div>
            <div className="flex relative">
              <button onClick={handleHiddenDropdown} className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                <span className="w-4 h-4 text-sm text-center font-semibold self-center">{codeOption}</span>
              </button>
              <div className={`${hiddenDropdown ? 'hidden' : 'absolute'} top-12 h-56 -left-20 w-44 overflow-y-auto px-2 py-2 bg-slate-200 text-black z-10 scroll-hidden`}>
                {
                  latinAmericanCountries.map(country => {
                    return (
                      <button key={country.nameOfCountry} onClick={(e) => {
                        e.preventDefault()
                        setCodeOption(country.codeOfCountry)
                        setHiddenDropdown(!hiddenDropdown)
                      }}
                        className="w-full py-1 flex items-center gap-x-3 hover:bg-slate-300">
                        <span className="font-semibold">{country.codeOfCountry}</span>
                        {country.nameOfCountry[0]}{country.nameOfCountry[1]}{country.nameOfCountry[2]}
                        <span></span>
                      </button>
                    )
                  })
                }
              </div>
              <input type="text" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="3865559022"
                name="celPhone"
                value={clientTemplate.celPhone}
                onChange={handleChange}
              />
            </div>
          </div>
          {errors && (
            <span className='text-red-600 font-semibold text-sm'>{errors?.celPhone}</span>
          )}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="Nombre"
              name="name"
              value={clientTemplate.name}
              onChange={handleChange}
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold text-sm'>{errors?.name}</span>
          )}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="text" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="Apellido"
              name="lastName"
              value={clientTemplate.lastName}
              onChange={handleChange}
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold text-sm'>{errors?.lastName}</span>
          )}
          <div className="flex flex-col">
            <label className="text-sm ">Fecha de nacimiento</label>
            <input className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " onChange={handleChange} placeholder="Fecha de nacimiento" value={clientTemplate.dateOfBirth} type="date" name="dateOfBirth" />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold text-sm'>{errors?.dateOfBirth}</span>
          )}
          <button className="w-full py-2 rounded-lg bg-black text-white font-semibold " type="submit">Crear cliente</button>
        </form>
      </div>
      <Alert hiddenAlertObject={hiddenAlertObject} />
      <Loader hiddenLoaderObject={hiddenLoaderObject} />
    </div>
  )
}
export default FormCreateClient;
