import { useEffect, useState } from "react";
import axios from 'axios'
import CardClient from "./CardClient";
import PopUpDelete from "./PopUpDelete";

const ViewClients = () => {
  const [clients, setClients] = useState([])
  const [hiddenListOfClients, setHiddenListOfClients] = useState(false)

  const getClients = async () => {
    try {
      const { data } = await axios("http://localhost:3001/user")
      setClients(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   getClients()
  }, [])

  return (
    <div className="w-full flex items-center px-16 gap-x-6">
      <ul role="list" className=" w-2/3 divide-y divide-gray-400 h-full overflow-y-auto scroll-hidden py-4">
        {
          clients?.map((client) => {
            return (
              <CardClient setHiddenListOfClients={setHiddenListOfClients} hiddenListOfClients={hiddenListOfClients} name={client.name} lastName={client.lastName} email={client.email} celPhone={client.celPhone} dateOfBirth={client.dateOfBirth} key={client.id} id={client.id} />
            )
          })
        }
      </ul>
      <div className="w-1/3 h-screen bg-black">

      </div>
      <PopUpDelete hiddenListOfClients={hiddenListOfClients} setHiddenListOfClients={setHiddenListOfClients}/>
    </div>
  )
}
export default ViewClients;
