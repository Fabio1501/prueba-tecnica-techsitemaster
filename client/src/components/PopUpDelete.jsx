import axios from "axios";

const PopUpDelete = ({ hiddenPopUpDelete, setHiddenPopUpDelete, client, hiddenAlertObject, setHiddenAlertObject, setHiddenLoaderObject }) => {

  const deleteClient = async () => {
    try {
      setHiddenPopUpDelete(!hiddenPopUpDelete)
      setHiddenLoaderObject(false)
      axios.delete(`https://contratameya.onrender.com/user/${client.id}`)
      setHiddenLoaderObject(true)
      setHiddenAlertObject({
        isHidden: false,
        text: '¡Se eliminó el cliente con éxito!',
        isSuccess: true
      })
    } catch (error) {
      setHiddenAlertObject({
        ...hiddenAlertObject,
        isHidden: false,
        text: 'No se pudo eliminar el cliente.'
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
    <div className={`${hiddenPopUpDelete ? 'block' : 'hidden'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 md:inset-0 bg-black/70`}>
      <div className='h-1/2 relative w-1/3 bg-slate-200 text-black rounded-lg p-10'>

        <button onClick={() => setHiddenPopUpDelete(!hiddenPopUpDelete)} className='absolute top-4 right-4'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11.8031 10.6031L20.9531 1.45312C21.2906 1.11562 21.2906 0.590625 20.9531 0.253125C20.6156 -0.084375 20.0906 -0.084375 19.7531 0.253125L10.6031 9.40312L1.45312 0.253125C1.11562 -0.084375 0.590625 -0.084375 0.253125 0.253125C-0.084375 0.590625 -0.084375 1.11562 0.253125 1.45312L9.40312 10.6031L0.253125 19.7531C-0.084375 20.0906 -0.084375 20.6156 0.253125 20.9531C0.403125 21.1031 0.628125 21.2156 0.853125 21.2156C1.07812 21.2156 1.30312 21.1406 1.45312 20.9531L10.6031 11.8031L19.7531 20.9531C19.9031 21.1031 20.1281 21.2156 20.3531 21.2156C20.5781 21.2156 20.8031 21.1406 20.9531 20.9531C21.2906 20.6156 21.2906 20.0906 20.9531 19.7531L11.8031 10.6031Z" fill="black" />
        </svg></button>
        <div className="h-full flex flex-col gap-y-12 items-center justify-center">
          <h3 className="text-xl text-center font-semibold ">¿Estás seguro que deseas eliminar a <span className="font-black">{client.name} {client.lastName}</span>?</h3>
          <p className="text-xl text-center">Si eliminas el cliente no podrás recuperarlo luego.</p>
          <div className="flex items-center gap-x-4">
            <button onClick={deleteClient} className="rounded-lg px-4 py-2 font-semibold bg-red-500 text-white">Eliminar</button>
            <button onClick={() => setHiddenPopUpDelete(!hiddenPopUpDelete)} className="rounded-lg px-4 py-2 font-semibold bg-black text-white">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PopUpDelete;
