import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { CheckCircledIcon } from '@radix-ui/react-icons';

/**
 * @typedef {Object} ToastContentProps
 * @property {string} mensagem - A mensagem a ser exibida no toast.
 */

/**
 * Componente para o conteúdo do Toast
 * @param {ToastContentProps} props 
 */
export const ToastContent = ({ mensagem }) => (
  <div className="flex items-center">
    <CheckCircledIcon className="mr-2 text-green-500" />
    <span>{mensagem}</span>
  </div>
);

/**
 * @typedef {Object} PopUpProps
 * @property {string} [buttonText="Save"] - O texto do botão.
 * @property {string} [mensagem="Cat was updated"] - A mensagem do toast.
 */

/**
 * Componente PopUp
 * @param {PopUpProps} props 
 */

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
