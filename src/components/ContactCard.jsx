

const ContactCard = (props) => {
  return (
    <div className="flex flex-col border-real rounded-lg p-3 gap-5 flex-1 hover:scale-110 duration-300 transition hover:blue-shadow">
        <div className="flex items-center gap-8">
            {/* icon  */}
            <div className='bg-lightBlue p-3 rounded-lg'>
               {props.icon}
            </div>

            {/* title and info */}
            <div>
                <h6 className="text-xl font-bold text-[#1f3e72]">{props.title}</h6>
                <span className="text-gray-500">{props.number}</span>
            </div>
        </div>
        <div>
            <button className="bg-lightBlue text-blue w-full rounded font-bold py-2 hover:bg-gradientDarkBlue hover:text-white hover:scale-90 duration-300 transition">{props.button}</button>
        </div>
    </div>
  )
}
export default ContactCard