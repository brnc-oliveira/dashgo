import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

// ...rest pega o restante das propriedades que o campo input pode receber, propriedades que foram fornecidas pelo extends ChakraInputProps
// FormControl -> Funciona como se fosse uma div, assim para retirar o espaçamento definido pelo spacing do Stack entre o Label e o Input 
// Foi alterado a estrutura desse componente devido o uso do React Hook Form (biblioteca de forms) - aula Chapter IV aula 03 - Formulários e validação

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: Partial<FieldError>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {

    return (
        <FormControl isInvalid={!!error}> 
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            
            <ChakraInput 
                name={name} 
                id={name} 
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgcolor: "gray.900"
                }}
                size="lg"
                ref={ref}
                {...rest}
            />

            { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            ) }
        </FormControl> 
    );
}

export const Input = forwardRef(InputBase)