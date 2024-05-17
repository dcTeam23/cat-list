import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export const PopUpWithToaster = () => { 
  return <> 
  <PopUp /> 
  <Toaster/> 
  </> 
}

export function PopUp() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Cat was updated",
        })
      }}
    >
    Save
    </Button>
  )
}
