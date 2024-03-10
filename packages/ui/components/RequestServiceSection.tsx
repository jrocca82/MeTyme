import { Flex, Text, Image, Heading } from "@chakra-ui/react";
import Link from "next/link";

const RequestServiceSection = () => (
	<Flex padding={{ base: "20px", md: "50px" }} pos="relative" align="center" flexDirection={{ base: "column-reverse", md: "row" }}>
		<Image src="incense.jpg" boxSize="300px" borderRadius="20px" />
		<Flex flexDir="column" padding="50px">
			<Heading>Request a Last Minute Service</Heading>
			<Text fontSize="24px">
				To request a last-minute service, please <Link href="https://forms.office.com/r/hrzJRByU2h" target="_blank">fill out our form</Link>, giving as much information as possible. We will then be in contact to help you book your service as quickly as possible!
			</Text>
		</Flex>
	</Flex>
);

export default RequestServiceSection;
