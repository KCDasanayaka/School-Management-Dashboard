import Announcements from "@/app/components/Announcements"
import AttendanceChart from "@/app/components/AttendanceChart"
import CountChart from "@/app/components/CountChart"
import EventCalender from "@/app/components/EventCalender"
import FinanceChart from "@/app/components/FinanceChart"
import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
         <div className="w-full lg:w-2/3 flex flex-col gap-8">
         {/* User Cards */}
         <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staf"/>
         </div>
         <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart/>
            </div>
            <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/>
            </div>
         </div>
         <div className="w-full h-[500px]">
            <FinanceChart/>
         </div>
         </div>
         <div className="w-full lg:w-1/3 flex flex-col gap-8">
         <EventCalender/>
         <Announcements/>
         </div>  
        </div>
    )
}
export default AdminPage