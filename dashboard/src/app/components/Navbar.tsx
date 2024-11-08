import Image from "next/image"
import search from "../../../public/search.png"
import message from "../../../Public/message.png"
import annoucement from "../../../public/announcement.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        <div className="hidden md:flex">
            <Image src={search} alt="" width={14} height={14}/> 
            <input type="text" placeholder="Search...." />
        </div>
        <div className="classname">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                <Image src={message} alt="" w-20 h-20/>
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                <Image src={annoucement} alt="" w-20 h-20/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
