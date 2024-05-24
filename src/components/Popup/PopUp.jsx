import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { CheckCircledIcon } from '@radix-ui/react-icons';

// Componente para o conteúdo do Toast
const ToastContent = ({ mensagem }) => (
  <div className="flex items-center">
    <CheckCircledIcon className="mr-2 text-green-500" />
    <span>{mensagem}</span>
  </div>
);

// Componente PopUp (recebe buttonText e message como props)
export function PopUp({ buttonText = "Save", mensagem = "Cat was updated" }) {
  const { toast } = useToast();

  const handleSaveClick = () => {
    toast({
      description: <ToastContent mensagem={mensagem} />,
    });
  };

  return (
    <Button variant="outline" onClick={handleSaveClick}>
      {buttonText}
    </Button>
  );
}

// Componente PopUpWithToaster (wrapper para PopUp e Toaster)
export const PopUpWithToaster = ({ buttonText = "Save", mensagem = "Cat was updated" }) => (
  <>
    <PopUp buttonText={buttonText} mensagem={mensagem} />
    <Toaster />
  </>
);
