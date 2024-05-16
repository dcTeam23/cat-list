{/*[Integration]: Chamar o botão Add-a-Cat (que vai acionar o CatDialog) 
e o ícone Avatar através do Header */}
import { Add-Cat } from "../ui/add-cat"
import { Avatar } from "../ui/avatar"
import { Header } from './Header';

export const Header = () => {
  return (
  <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
    {/*Navbar Header*/}
    <div className="bg-primary/40 py-3 sm:py-3">
        <div className="container flex justify-between items-center py-6">
            {/* link para CatList */} 
            <div>
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-20">Cat List</a> 
            </div>
            {/* link para Add-a-Cat e Avatar*/} 
            <div>
                <div className="group">
                    <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gren-300 px-2 py-1 focus:outline-none focus:border-1 focus-border-primary"/>
                </div>
            </div>
        </div>
    </div>
  </div>
    
  );
};