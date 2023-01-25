import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

// HStack -> por padrão o stack é vertical, o H stack seria o horizontal

export function NotificationsNav() {
    return (
        <HStack 
            spacing={["6", "8"]} // espaçamento de 6 para mobile e 8 para o resto
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
        >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserLine} fontSize="20" />
        </HStack>
    );
}