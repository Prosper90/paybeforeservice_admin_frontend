
export default function Top({setOpenMenu}) {
  return (
    <div className='flex justify-center items-center p-3 border-b border-[#DADADA] w-100 relative'>
      <svg
        onClick={() => setOpenMenu(true)}
        className="w-10 h-10 left-7 absolute cursor-pointer hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="#888888" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
      </svg>

        <div className="text-[#6E3EFF] font-bold text-[17px]">Paybeforeservice</div>
    </div>
  )
}
