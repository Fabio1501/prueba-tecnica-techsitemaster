import { useEffect, useState } from "react";
import axios from 'axios'
import CardClient, { isoToYMD } from "./CardClient";
import PopUpDelete from "./PopUpDelete";
import Charts from "./Charts";

const dataChart = [
  { name: 'Menores de 30 años', value: 0 },
  { name: 'De 31 a 60 años', value: 0 },
  { name: 'Mayores de 60 años', value: 0 }
];

const ViewClients = () => {
  const [clients, setClients] = useState([])
  const [data, setData] = useState(dataChart)
  const [hiddenListOfClients, setHiddenListOfClients] = useState(false)
  const [client, setClient] = useState({
    id: '',
    name: '',
    lastName: ''
  })

  const [flag, setFlag] = useState(false)


  const getClients = async () => {
    try {
      const { data } = await axios("https://contratameya.onrender.com/user")
      setClients(data)
      setFlag(true)
    } catch (error) {
      console.log(error);
    }
  }

  function countAgeGroups() {
    const ages = clients.map(person => {
      const date = isoToYMD(person.dateOfBirth)
      const birthDate = new Date(date);
      const ageInMilliseconds = Date.now() - birthDate.getTime();
      const age = new Date(ageInMilliseconds).getFullYear() - 1970;
      return age;
    });

    const counts = ages.reduce((acc, age) => {
      if (age < 30) {
        acc.under30 += 1;
      } else if (age >= 31 && age <= 60) {
        acc.between31and60 += 1;
      } else {
        acc.over60 += 1;
      }
      return acc;
    }, { under30: 0, between31and60: 0, over60: 0 });

    const newChartData = data.map(dat => {
      if(dat.name == 'Menores de 30 años'){
        dat.value = counts.under30
      }
      if(dat.name == 'De 31 a 60 años'){
        dat.value = counts.between31and60
      }
      if(dat.name == 'Mayores de 60 años'){
        dat.value = counts.over60
      }
      return dat
    })

    setData(newChartData)
  }

  useEffect(() => {
    getClients()
  }, [])

  useEffect(() => {
    if(flag){
      countAgeGroups()
    }
  }, [clients])

  return (
    <div className="w-full flex  px-16 gap-x-6">
      <div className=" w-2/3 flex flex-col gap-y-12 h-full py-12">
        <h3 className="text-3xl font-black ">Lista de clientes</h3>
        <ul className="overflow-y-auto scroll-hidden divide-y divide-gray-400">
          {
            clients.length ?
              clients.map((client) => {
                return (
                  <CardClient setClient={setClient} setHiddenListOfClients={setHiddenListOfClients} hiddenListOfClients={hiddenListOfClients} name={client.name} lastName={client.lastName} email={client.email} celPhone={client.celPhone} dateOfBirth={client.dateOfBirth} key={client.id} id={client.id} />
                )
              }) :
              <h1>Loading...</h1>
          }
        </ul>
      </div>
      <div className="w-1/3 relative">
        <Charts data={data} />
      </div>
      <PopUpDelete client={client} hiddenListOfClients={hiddenListOfClients} setHiddenListOfClients={setHiddenListOfClients} />
    </div>
  )
}
export default ViewClients;
