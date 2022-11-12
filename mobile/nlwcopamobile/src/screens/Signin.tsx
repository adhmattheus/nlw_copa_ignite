import { Center, Icon, Text } from "native-base";
import Logo from '../assets/logo.svg'
import { Button } from "../components/Button";
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from "../hoooks/useAuth";

export function SignIn() {
  const { signIn, user } = useAuth();

  console.log('dados do usuario =>', user);


  return (
    <Center flex={1} bgColor="gray.950" p={7}>

      <Logo width={2012} height={40} />

      <Button
        type="SECUNDARY"
        title="Entrar com google"
        leftIcon={<Icon as={Fontisto} name={"google"} color="white" size="md" />}
        mt={12}
        onPress={signIn}
      />

      <Text textAlign="center" color="white" mt={4}>
        Não utilizamos nenhuma informação além{"\n"} do seu e-mail para criação de sua conta.
      </Text>

    </Center>


  );
} 