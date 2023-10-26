import close from '../assets/close.svg'
import check from '../assets/check.svg'

const Alert = ({hiddenAlertObject }) => {
  return (
    <div className={`${hiddenAlertObject.isHidden ? 'hidden' : 'block'} fixed w-full h-screen flex items-end justify-start top-0 left-0 z-40 md:inset-0 bg-transparent`}>
      <div className={`shadow-2xl flex items-center justify-center h-[10%] relative w-1/3 bg-slate-200 text-black rounded-lg p-10 m-12`}>
        <div className={`absolute w-1/4 left-0 rounded-l-md ${hiddenAlertObject.isSuccess ? 'bg-green-600' : 'bg-red-600'} h-full flex items-center justify-center`}>
          {
            hiddenAlertObject.isSuccess ? 
            <img src={check} className='w-3/4'  alt="" /> :
            <img src={close} className='w-3/4' alt="" />
          }
        </div>
        <span className={`${hiddenAlertObject.isSuccess ? 'text-green-600' : 'text-red-600'} font-black uppercase absolute right-0 w-2/3`}>
          {hiddenAlertObject.text}
        </span>
      </div>
    </div>
  )
}
export default Alert;
