import { Button } from "@/components/ui/button";


export function SignInSignOut() {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-2 w-80">
        
        <div>
          <Button variant={"ghost"} className="justify-start text-sm text-gray-700 w-full py-2 mt-2">Sign in</Button>
        </div>
        <div>
          <Button variant={"ghost"} className="justify-start text-sm text-gray-700 w-full py-2 mt-2">Sign out</Button>
        </div>

      </div>



    </>
  )
}
