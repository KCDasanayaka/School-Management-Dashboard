import Image from "next/image"
import search from "../../../public/search.png"
import message from "../../../Public/message.png"
import annoucement from "../../../public/announcement.png"
import avatar from "../../../public/avatar.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] px-2 py-0.5 ring-gray-300">
            <Image src={search} alt="" width={14} height={14}/> 
            <input type="text" placeholder="Search...."className="w-[200px] p-2 bg-transparent outline-none" />
        </div>
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                <Image src={message} alt="" w-20 h-20/>
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative">
                <Image src={annoucement} alt="" w-20 h-20/>
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xm">1</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium text-black">Jone Doe</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>
            <Image src={avatar} alt="" width={36} height={36} className="rounded-full"/>

        </div>
    </div>
  )
}

export default Navbar
