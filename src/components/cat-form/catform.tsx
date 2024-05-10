// Todo: Centralizar o input de imagem
// Todo: Tirar a descrição "Escolha sua imagem" que está dentro do input de imagem
// Todo: Adicionar o botão para remover a foto do gato e voltar para ao input de seleção de arquivo
// Todo: Trocar os valores dos selects e adicionar outros caso tenha
// Todo: Trocar os estilos da bordas dos inputs (Opicional)
// Todo: Adicionar um loading na escolha da imagem (Opicional)


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



export function CatForm() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  
  const removeAvatar = () => {
    setAvatar(null); 
  };

    const removeSave = (): boolean => {

        return avatar === null;
    };

  return <>
    <Dialog >
      <DialogTrigger className="border rounded-xl p-2 bg-lime-600 font-semibold">Add a Cat</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="w-full font-bold">Add cat</DialogTitle>
        </DialogHeader>
        <div className="w-full gap-1.5 ease-out flex flex-col items-center  ">
          {avatar ? (
            <div>
              <img src={avatar} alt="Avatar" className='h-40 rounded-full w-40 flex items-center object-cover' />
            </div>
          ) : (
            <div className="border h-40 w-40 rounded-full border-black overflow-hidden">
              <Input
                id="picture"
                type="file"
                className="text-transparent h-full w-full rounded-full opacity-0"
                onChange={handleAvatarChange}
                accept="image/*"
                required
              />
            </div>
          )}
          <button onClick={removeAvatar} disabled={removeSave()}  className=" hover:bg-red-50 flex items-center border rounded-md mt-4 px-7 py-1 text-red-600 hover:bg-red disabled:opacity-70 ">Remover Avatar</button>

          <Label className="self-start">Name</Label>
          <Input id="nome" type="text" className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm " required></Input>
          <Label className="self-start">Breed</Label>
          <Select required>
            <SelectTrigger className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light" >Siamese</SelectItem>
            </SelectContent>
          </Select>
          <Label className="self-start">Age</Label>
          <Select>
            <SelectTrigger className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Kitten(<1 year)"></SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>
          <Label className="self-start">Description</Label>
          <Textarea className="w-full border rounded border-gray-300 focus:border-[#3770BD] focus:shadow-sm  "></Textarea>
          <Button disabled={removeSave()}  className=" rounded-[5px] bg-green-700 text-white self-start mt-3 hover:bg-green-600">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  </>
  }
