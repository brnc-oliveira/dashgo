import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

// Flex por padrão é uma div -> as="" serve para alterar esse padrão
// Stack seria basicamente um empilhamento, se coloca em volta do conteúdo empilhado e pode definir um espaçamento padrão (spacing)

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({ // validação de campos utilizando a biblioteca yup
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'), // o e-mail deve ser string, é obrigatório e tem que estar no formato e-mail
  password: yup.string().required('Senha obrigatória'), // a senha deve ser string e é obrigatório
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const errors = formState.errors

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha" 
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}   
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}