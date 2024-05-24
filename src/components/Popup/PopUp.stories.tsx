import type { Meta, StoryObj } from '@storybook/react';
import { PopUp, PopUpWithToaster } from './PopUp';


const meta: Meta<typeof PopUp> = {
  title: 'Components/PopUp', // Define um título para o grupo de stories
  component: PopUp,
  argTypes: {
    buttonText: { control: 'text' },
    mensagem: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PopUp>;

// Stories
export const Primary: Story = {
  render: () => <PopUpWithToaster />,
}; // Usa os valores padrão das props

export const Secondary: Story = {
  args: {
    buttonText: "Atualizar",
    mensagem: "As informações do gato foram atualizadas com sucesso!",
  },
  render: ( {buttonText, mensagem}) =>  <PopUpWithToaster 
  buttonText={ buttonText } 
  mensagem={ mensagem } 
/>,
};
