import { Button } from "@/components/ui/button"



export const MenuProfile = ({ labelOne = "Editar Perfil", labelTwo="Sign out"  }) => {
  return (
<>

    <div className="bg-white shadow-lg rounded-lg p-2 w-80">


    <div className="mb-4 flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="ml-4">
            <h2 className="text-base ">Usuário</h2>
            <p className="text-gray-500">Email@email.com</p>
        </div>
    </div>
     
    <div>
        <Button variant={"ghost"} className="justify-start text-sm text-gray-700 w-full py-2 mt-2">{labelOne}</Button>
      </div>
      <div>
        <Button variant={"ghost"} className="justify-start text-sm text-gray-700 w-full py-2 mt-2">{labelTwo}</Button>
      </div>

    </div>  

    </>
  );
}


