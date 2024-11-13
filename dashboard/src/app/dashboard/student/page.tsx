import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"
import EventCalender from "@/app/components/EventCalender"

const StudentPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col xl:flex-row'>
            <div className="w-full xl:w-2/3">
                <div className="h-full bg-white p-4 rounded-md text-black">
                    <h1 className="text-xl font-semibold">Schedule (4A) </h1>
                    <BigCalendar/>
                </div>
            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
            <EventCalender/>
            <Announcements/>
            </div>
            
        </div>
    )
}
export default StudentPage