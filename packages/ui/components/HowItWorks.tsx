import { Flex, Text, Image, OrderedList, ListItem, Heading } from "@chakra-ui/react";
import Link from "next/link";

const HowItWorks = () => (
	<Flex padding={{ base: "20px", md: "50px" }} fontSize="24px" pos="relative" align="center" flexDirection={{ base: "column-reverse", md: "row" }}>
		<Image src="clock.jpg" boxSize="300px" borderRadius="20px" />
		<Flex flexDir="column" padding="50px">
			<Heading >
				How it Works:
			</Heading>
			<OrderedList fontSize="24px">
				<ListItem><Text as="span" fontWeight="bold">Tell us your Request:</Text> Fill out a <Link href="https://forms.office.com/r/hrzJRByU2h" target="_blank">quick form</Link> telling us what service you need, when and where</ListItem>
				<ListItem><Text as="span" fontWeight="bold">We Find the best match:</Text> Our team will search high and low to find the perfect service for you.</ListItem>
				<ListItem><Text as="span" fontWeight="bold">Receive Recommendations:</Text> We'll send you personalised recommendations - choose one that suits your best.</ListItem>
				<ListItem><Text as="span" fontWeight="bold">Enjoy your ME TYME moment:</Text> Sit back, relax, and let us handle the rest. Your self-care experience is just a request away!</ListItem>
			</OrderedList>
		</Flex>
	</Flex>
);

export default HowItWorks;
