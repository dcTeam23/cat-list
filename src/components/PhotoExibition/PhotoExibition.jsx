import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {ImageIcon, Trash2} from "lucide-react"

export const PhotoExibition = () => {
    return(
       <div className="flex flex-col justify-center items-center gap-6 w-[200px]">
        <Input id="image-upload" accept="image/*" type="file" className="sr-only rounded-full w-[200px] h-[200px]"/>
        <label className="flex items-center justify-center w-[180px] h-[180px] rounded-full bg-white border-2 border-gray-100 cursor-pointer" htmlFor="image-upload">
            <ImageIcon className="text-gray-200"/>
        </label>
        <Button variant={"outline"} className="w-[75%] text-red-600"> <Trash2 className="mr-1" size={18}/> Remove photo</Button>
       </div> 
    )
}