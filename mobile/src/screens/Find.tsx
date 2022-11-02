import { Heading, Text, VStack, Icon } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from "../assets/logo.svg";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus Bolões" />

      <VStack
        mt={6}
        mb={4}
        pb={4}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
      >
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
        />
      </VStack>
    </VStack>
  );
}
