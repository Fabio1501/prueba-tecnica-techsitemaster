import { Link } from "react-router-dom";

export function isoToYMD(dateStr) {
  let date = new Date(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
}

const CardClient = ({ name, lastName, email, id, celPhone, dateOfBirth, setHiddenListOfClients, hiddenListOfClients, setClient }) => {

  const textWhatsapp = `Hola`
  
  const handleClick = () => {
    setClient({id, name, lastName})
    setHiddenListOfClients(!hiddenListOfClients)
  }
  
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className={`bg-red-500 rounded-full h-12 w-12 text-white font-black uppercase flex items-center justify-center`}>
            {name[0]}{lastName[0]}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {name} {lastName}
          </p>
          <p className="text-sm text-gray-700 truncate ">
            {email}
          </p>
          <p className="text-sm bg-yellow-300 w-fit rounded-md px-1 text-black/70">
          {isoToYMD(dateOfBirth)}
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <button
            onClick={handleClick}
            className="inline-block px-4 py-2 bg-red-500 rounded-md text-white font-semibold">
            Eliminar cliente
          </button>
          <Link target="_blank" to={`https://wa.me/${celPhone}?text=${textWhatsapp}`} className="inline-block px-4 py-2 bg-green-500 rounded-md text-white font-semibold">
            WhatsApp
          </Link>
        </div>
      </div>
    </li>
  )
}
export default CardClient;
