import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput"
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
       children: [        
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail address'></TextInput.Input>       
       ],
    },
    argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail address'></TextInput.Input>    
    }
};
