{/*Icons from Lucide */}
import { LayoutGrid, Power } from 'lucide-react';
{/*The Sheet Component from shadcn/ui*/}
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.jsx";
import { useState, useEffect } from 'react';
{/*The Supabase config file*/}
import { supabase } from '../assets/supabase.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [appName, setAppName] = useState('');
    const [trialDuration, setTrialDuration] = useState(0)
    const [reminder, setReminder] = useState(0)
    const [notes, setNotes] = useState('');
    const [startDate, setStartData] = useState('');
    const [userApps, setUserApps] = useState([]);
    const navigate = useNavigate();

    //Function to Add/insert the App info to the db
    const handleAppAddition = async (e) => {
      e.preventDefault();

      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if(userError || !user){
        console.error("User not logged in:", userError ? userError.message : "No user found");
        return;
      }
      const {error} = await supabase.from("Apps").insert({
        name: appName,
        duration: parseInt(trialDuration),
        reminder: parseInt(reminder),
        notes,
        start: startDate,
        user_id:user.id
      });
      if(error){
        console.error(error.message);
        return;
      } else {
        console.log('App Added Successfully');
        navigate('/dashboard');
        return
      }
    }

    const fetchUserApps = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if(userError || !user){
        console.error("User not logged in:", userError ? userError.message : "No user found");
        return;
      }

      const {data, error: appsError} = await supabase.from("Apps").select("*").eq('user_id', user.id);
      if(appsError){
        console.error("Couldn't fetch Apps:", appsError.message);
        return;
      } else {
        console.log('Apps Fetched successfully');
        setUserApps(data)
      }
    }

    const deleteApp = async (appId) => {
      const { error } = await supabase
        .from('Apps')
        .delete()
        .eq('id', appId);

      if (error) {
        console.error('Delete failed:', error.message);
      } else {
        console.log('Deleted successfully');
        // Optionally: refetch the apps list
      }
    };

    const handleLogout = async () => {
      const {error} = await supabase.auth.signOut();
      if(error){
        console.error("Logout failed", error.message);
      } else {
        navigate('/');
      }
    }


    useEffect(() => {
      fetchUserApps()
    },[])
  return (
    <section className="w-full min-h-screen flex flex-col gap-3">
      {/* Top Bar */}
      <div className="w-full h-fit p-4 flex justify-between items-center border-b">
        <Link to='/'><h1 className="md:text-4xl text-2xl font-bold text-slate-700">SwiftBill</h1></Link>
        

        <div className="w-fit md:w-1/5 flex flex-col sm:flex-row gap-3">
        {
          /* For when we launch with the Premium Package
              <button className="hidden w-full py-3 px-4 rounded-xl bg-violet-800 md:flex items-center justify-center gap-2 text-white font-semibold hover:bg-violet-900 transition">👑 Subscription</button>
          */
        }
          

          <button className="w-full py-3 px-4 rounded-xl bg-red-600 flex items-center justify-center gap-2 text-white font-semibold hover:bg-red-700 transition" onClick={handleLogout}>
            Logout <Power size={18} />
          </button>
        </div>
      </div>

      {/* App Grid Section */}
      <div className="w-full flex-1 p-5">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 bg-slate-200 rounded-t-3xl p-5 min-h-[70vh]">

          {/* Wrap Trigger inside Sheet */}
          <Sheet className="p-5">
            <div className="col-span-1 aspect-[4/4] rounded-2xl bg-white shadow-xl p-5 flex flex-col justify-between">
              <div className="w-full h-4/5 border-2 border-dashed flex justify-center items-center rounded-2xl">
                <SheetTrigger asChild>
                  <button className="p-5 rounded-full bg-slate-700 text-white font-bold hover:bg-slate-800 transition">
                    <LayoutGrid size={24} />
                  </button>
                </SheetTrigger>
              </div>
              <h2 className="text-center text-xl font-semibold text-slate-900 mt-2">Add App</h2>
            </div>

            {/* Sheet Content */}
            <SheetContent className="bg-slate-900 text-white border-none rounded-l-xl overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl font-bold text-white">Add Application</SheetTitle>
                <SheetDescription className="text-slate-300">
                  Add details about the app you're currently on a free trial with.
                </SheetDescription>
              </SheetHeader>

              <form className="w-full flex flex-col gap-4 p-5" onSubmit={handleAppAddition}>
                <div>
                  <label htmlFor="appName" className="block mb-1 text-sm text-slate-300">App Name</label>
                  <input
                    type="text"
                    id="appName"
                    placeholder="e.g., Netflix"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none"
                    value={appName}
                    onChange={(e) => {setAppName(e.target.value)}}
                  />
                </div>

                <div>
                  <label htmlFor="trialDuration" className="block mb-1 text-sm text-slate-300">Trial Duration</label>
                  <select
                    id="trialDuration"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-600 text-white focus:ring-2 focus:ring-violet-500 outline-none"
                    value={trialDuration}
                    onChange={(e) => {setTrialDuration(e.target.value)}}
                  >
                    <option value="">Select Duration</option>
                    <option value={30}>30 Days</option>
                    <option value={90}>3 Months</option>
                    <option value={180}>6 Months</option>
                    <option value={365}>1 Year</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reminder" className="block mb-1 text-sm text-slate-300">Reminder Before End</label>
                  <select
                    id="reminder"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-600 text-white focus:ring-2 focus:ring-violet-500 outline-none"
                    value={reminder}
                    onChange={(e) => {setReminder(e.target.value)}}
                  >
                    <option value="">Select Reminder Time</option>
                    <option value={1}>1 Day</option>
                    <option value={3}>3 Days</option>
                    <option value={7}>1 Week</option>
                    <option value={14}>2 Weeks</option>
                    <option value={21}>3 Weeks</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block mb-1 text-sm text-slate-300">Notes (Optional)</label>
                  <textarea
                    id="notes"
                    rows="3"
                    placeholder="e.g., Netflix Standard Plan, auto-renew enabled"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-violet-500 outline-none resize-none"
                    value={notes}
                    onChange={(e) => {setNotes(e.target.value)}}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="startDate" className="block mb-1 text-sm text-slate-300">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 border border-slate-600 text-white focus:ring-2 focus:ring-violet-500 outline-none"
                    value={startDate}
                    onChange={(e) => {setStartData(e.target.value)}}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-3 bg-violet-600 hover:bg-violet-700 transition rounded-xl text-white font-semibold"
                >
                  Add App
                </button>
              </form>
            </SheetContent>
          </Sheet>

          {
            userApps.map((app, index) => (
            <div className="col-span-1 aspect-[4/4] bg-white rounded-3xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300" key={index}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="md:text-3xl text-xl font-bold text-slate-800">{app.name}</h2>
                  <p className="text-lg text-slate-500">{app.notes || 'No notes'}</p>
                </div>
                <span className="md:text-lg text-base px-2 py-1 bg-violet-100 text-violet-800 rounded-full">
                  {app.duration} Days
                </span>
              </div>

              <div className="text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-700 md:font-semibold ">Start:</span>{' '}
                  {new Date(app.start).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium text-slate-700">Reminder:</span>{' '}
                  {app.reminder} days before
                </p>
              </div>
              <button className='w-full py-3 rounded-3xl bg-red-500 text-white text-xl' onClick={() => {deleteApp(app.id)}}>Delete</button>

              <div className="mt-4 flex justify-end">
                {
                  /*
                    <button className="text-sm text-violet-700 hover:underline font-medium">
                      View
                    </button>
                  */
                }
              </div>
            </div>

            ))
          }
          


        </div>
      </div>
    </section>
  );
}
