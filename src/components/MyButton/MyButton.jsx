import { Button } from "../ui/button";

export const MyButton = ({label= "Click me!"}) => {
  return (
    <div className="flex flex-col gap-2" >
      <p>Teste Tailwind Aplicado - Variações do Componente Button</p>
      <div className="flex gap-2 mt-2" >
      <Button variant={"default"}>{label}</Button>
      <Button variant={"destructive"}>{label}</Button>
      <Button variant={"ghost"}>{label}</Button>
      <Button variant={"link"}>{label}</Button>
      <Button variant={"outline"}>{label}</Button>
      <Button variant={"secondary"}>{label}</Button>
      </div>
    </div>
  );
}