import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
         <div className="w-full lg:w-2/3">
         {/* User Cards */}
         <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staf"/>

         </div>
         </div>
         <div className="w-full lg:w-1/3">r</div>  
        </div>
    )
}
export default AdminPage