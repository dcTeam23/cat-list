import { Button } from "../ui/button";



export const MyButton = ({label= "Click me!"}) => {
  return (
    <Button variant={"outline"}>{label}</Button>
  );
}