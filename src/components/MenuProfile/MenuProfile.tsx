import { Button } from "@/components/ui/button"



export const MenuProfile = ({ label = "Click me!" }) => {
  return (
    <div>

      <div>
        <div className="border-black">
          icone avatar
          <div >
            <h2 className="font-bold">Nome</h2>
            <h3>email</h3>
          </div>
        </div>

      </div>

      <div>
        <Button variant={"outline"} className="rounded-full">{label}</Button>
      </div>

      <div>
        <Button variant={"outline"}>{label}</Button>
      </div>

    </div>
  );
}







{/* <Button variant="outline">Button</Button> */ }