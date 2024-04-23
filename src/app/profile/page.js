import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Header from "../components/header";
import { LoginForm } from "../login/form";
import Sidebar from "../components/sidebar";
import { CiMail } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="h-screen overflow-hidden">
      <Header/>
      <div className="flex flex-col lg:flex-row w-full">
          <Sidebar/>
          <div className="flex items-center justify-center w-full ">
          {!user ? (
              <div className="p-12 space-y-4 rounded-xl shadow-red-300 flex flex-col items-center shadow-xl justify-center text-xl font-bold">
                <p>Please login first</p>
                <LoginForm />
              </div>
            ) : (
              <div className="flex items-start mt-16 w-full justify-around space-x-4 h-full">
              <div className="h-3/4 w-[40%] bg-white shadow-xl shadow-red-300 overflow-hidden rounded-2xl flex items-start justify-center">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-60 w-full bg-gray-200">
                    <img 
                    src={user.image} 
                    alt={user.name} 
                    className="h-full w-full object-cover" />
                  </div>
                  <div className="flex text-gray-600 my-2 w-full px-4 items-center justify-start">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex space-y-1 flex-col w-full">
                        <div className="text-xl font-bold">{user.name}</div>
                          <div className="text-md font-bold flex items-center space-x-1">
                            <MdAlternateEmail className="text-xl" />
                            <div>username</div>
                          </div>
                          <div className="flex items-center space-x-1">
                          <CiLocationOn className="h-6 w-6" />
                          <div>Location</div>  
                          </div> 
                      </div>
                      <div className="flex items-center space-x-1">
                            <CiMail className="h-6 w-6" />
                            <div>{user.email}</div>  
                          </div>
                      
                    </div>
                  </div>
                    <div className="flex p-4 items-center justify-start w-full ">
                      <div className="flex space-y-1 flex-col w-full text-md">
                       
                      <div className="text-xl font-bold">Socials</div>
                      <div className="flex items-center space-x-1">
                        <FaGithub className="h-6 w-6" />
                        <div>GitHub</div>  
                      </div> 
                      <div className="flex items-center space-x-1">
                        <FaLinkedinIn className="h-6 w-6 text-blue-800" />
                        <div>LinkedIn</div>  
                      </div> 
                      <div className="flex items-center space-x-1">
                        <FaInstagram className="h-6 w-6 text-fuchsia-500" />
                        <div>Instagram</div>  
                      </div> 
                      <div className="flex items-center space-x-1">
                        <BsTwitterX className="h-6 w-6" />
                        <div>Twitter</div>  
                      </div> 
                      <div className="flex items-center space-x-1">
                        <FaRedditAlien className="h-6 w-6 text-red-600" />
                        <div>Reddit</div>  
                      </div> 
                      </div> 
                    </div>
                </div>
              </div>
              <div className="h-3/4 w-[50%] bg-white shadow-xl shadow-red-300 rounded-2xl"></div>
              </div>
            )}
          </div>
      </div>
    </div>
  );
}