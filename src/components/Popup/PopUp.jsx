import { Button } from "../ui/button";
import { CheckCircledIcon } from '@radix-ui/react-icons';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export const PopUp = ({label= "Save"}, {texto= "Cat was updated"}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700" variant={"default"}>{label}</Button>
      </DialogTrigger>
      <DialogContent className="flex items-center">
        <CheckCircledIcon width="32" height="32"/>
        <span className="text-black">{texto}</span>    
      </DialogContent>
    </Dialog>
  );
};
