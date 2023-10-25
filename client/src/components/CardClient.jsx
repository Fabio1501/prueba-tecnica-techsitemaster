import axios from "axios"
import { Link } from "react-router-dom";

const CardClient = ({ name, lastName, email, id, celPhone, dateOfBirth, setHiddenListOfClients, hiddenListOfClients }) => {

  const textWhatsapp = `Hola`

  const deleteClient = async () => {
    try {
      const {data} = axios.delete(`http://localhost:3001/${id}`)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
          <p className="text-sm text-gray-500 truncate ">
            {email}
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <button
            onClick={() => setHiddenListOfClients(!hiddenListOfClients)}
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
