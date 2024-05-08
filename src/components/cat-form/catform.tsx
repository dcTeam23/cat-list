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


export function CatForm() {
  const [avatar, setAvatar] = useState < string | null > (null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const removeAvatar = () => {
    setAvatar(null); // Remove a imagem
  };


  return <>
    <Dialog >
      <DialogTrigger className="border rounded-xl p-2 bg-lime-600 font-semibold">Add a Cat</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="w-full font-bold">Add cat</DialogTitle>
        </DialogHeader>
          <div className="w-full gap-1.5 ease-out flex flex-col">
            {avatar ? (
              <div>
                <img src={avatar} alt="Avatar" className='h-40 rounded-full w-40 flex items-center' />
                <button onClick={removeAvatar}>Remover Avatar</button>
              </div>
            ) : (
              <Input
                id="picture"
                type="file"
                className="h-40 rounded-full w-40 flex items-center"
                onChange={handleAvatarChange}
              />
            )}

            <Label>Name</Label>
            <Input id="nome" type="text" className="w-full"></Input>
            <Label>Breed</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
              </SelectContent>
            </Select>
            <Label>Age</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
              </SelectContent>
            </Select>
            <Label>Description</Label>
            <Textarea className="w-full"></Textarea>
          </div>
      </DialogContent>
    </Dialog>
  </>
}