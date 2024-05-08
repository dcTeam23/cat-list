import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

export const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleInputChange = (/** @type {{ (value: import("react").SetStateAction<string>): void; (value: import("react").SetStateAction<string>): void; (value: import("react").SetStateAction<string>): void; (value: import("react").SetStateAction<string>): void; (arg0: string): void; }} */ setter) => (/** @type {{ target: { value: string; }; }} */ e) => {
    setter(e.target.value);
  };

  const handleSubmitName = (/** @type {{ preventDefault: () => void; }} */ e) => {
    e.preventDefault();
    name && email ? console.log("Name and Email saved") : null;
    setName("");
    setEmail("");
  };

  const handleSubmitPassword = (/** @type {{ preventDefault: () => void; }} */ e) => {
    e.preventDefault();
    password && newPassword ? console.log("Password saved") : null;
    setPassword("");
    setNewPassword("");
    if (password === newPassword) {
      alert('Senha alterada!');
    } else {
      alert('As senhas não são iguais. Por favor, tente novamente.');
    }
  };
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="m-2 bg-green-600 hover:bg-green-700">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-gray-600">Edit profile</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col  items-start gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              value={name}
              onChange={handleInputChange(setName)}
              type="text"
              id="name"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex flex-col  items-start gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              value={email}
              onChange={handleInputChange(setEmail)}
              type="email"
              id="email"
              placeholder="seuemail@mail.com"
              className="col-span-3"
            />
          </div>
          <Button
            onClick={handleSubmitName}
            disabled={!name || !email ? true : false}
            type="submit"
            className="w-[20%] bg-green-600 hover:bg-green-700 "
          >
            Save
          </Button>
          <p className="mt-4 font-medium text-gray-600">Change Password</p>
          <div className="flex flex-col  items-start gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              onChange={handleInputChange(setPassword)}
              value={password}
              type="password"
              id="password"
              placeholder="*******"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="new-password" className="text-right">
              New Password
            </Label>
            <Input
              onChange={handleInputChange(setNewPassword)}
              value={newPassword}
              type="password"
              id="new-password"
              placeholder="*******"
              className="col-span-3"
            />
          </div>
          <Button
            onClick={handleSubmitPassword}
            disabled={!password || !newPassword ? true : false}
            type="submit"
            className="w-[20%] bg-green-600 hover:bg-green-700 "
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};