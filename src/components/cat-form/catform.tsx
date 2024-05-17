import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { ImageIcon} from "lucide-react"

export interface transformProps {
  add: boolean
}



export function CatForm(add:transformProps)  {
  function transform(add) {
    switch(true){
      case add == true:
        return `+ Add a Cat`
        break
      case add == false:
        return "Edit"
        break
      default:
        return "Add a Cat"
        break
    }
  }

  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };


  const removeAvatar = (): void => {
    setAvatar(null);
  };

  const disableButton = (): boolean => {
    return avatar === null;
  };
  

  return <>
    <Dialog >
      <DialogTrigger className="border rounded-md p-2 bg-[#17803d] font-semibold text-white flex">{transform(true)}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="w-full font-bold">Add cat</DialogTitle>
        </DialogHeader>
        <div className="w-full gap-1.5 ease-out flex flex-col items-center">
          {avatar ? (
            <div>
              <img src={avatar} alt="Avatar" className='h-40 rounded-full w-40 flex items-center object-cover' />
            </div>
          ) : (
            <div className="border h-40 w-40 rounded-full overflow-hidden">
              <ImageIcon className="w-20 h-20 text-gray-300 dark:text-gray-200 relative bottom-[-40px] left-[40px]" />
              <Input
                id="picture"
                type="file"
                className="text-transparent h-full w-full rounded-full relative z-50 bottom-[80px] opacity-0 cursor-pointer"
                onChange={handleAvatarChange}
                accept="image/*"
                required
              />
            </div>
          )}
          <button onClick={removeAvatar} disabled={disableButton()} className="hover:bg-red-50 flex items-center border rounded-md mt-4 px-7 py-1 text-red-600 hover:bg-red disabled:opacity-70 ease-out duration-300">Remover Avatar</button>

          <Label className="self-start">Name</Label>
          <Input id="nome" type="text" className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm" required></Input>
          <Label className="self-start">Breed</Label>
          <Select required>
            <SelectTrigger className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light" >Siamese</SelectItem>
            </SelectContent>
          </Select>
          <Label className="self-start">Age</Label>
          <Select>
            <SelectTrigger className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Kitten">Kitten(1 year)</SelectItem>
              <SelectItem value="Adult">Adult(+1 year)</SelectItem>
              <SelectItem value="Senior">Senior(+7 year)</SelectItem>
            </SelectContent>
          </Select>
          <Label className="self-start">Description</Label>
          <Textarea className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm"></Textarea>
          <Button disabled={disableButton()} className=" rounded-[5px] bg-green-700 text-white self-start mt-3 hover:bg-green-600 ease-out duration-300">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  </>
}
