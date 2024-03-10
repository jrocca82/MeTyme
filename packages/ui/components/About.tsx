import { Flex, Text, Image, Heading, OrderedList, ListItem, List } from "@chakra-ui/react";
import Link from "next/link";

const About = () => (
	<Flex padding={{ base: "20px", md: "50px" }} fontSize="24px" pos="relative" align="center" flexDirection={{ base: "column", md: "row" }}>
		<Flex flexDir="column" padding="50px">
			<Heading>Welcome to ME TYME - Your Personal Beauty & Wellness Concierge</Heading>
			<Text fontSize="24px">
				Need a Beauty or Wellness Service ASAP? We've Got you Covered!
				AT ME TYME, we're bringing the beauty to you! No need to navigate countless
				websites or make any calls; simply tell us what service you're looking for,
				and we'll find the best match for you. Whether it's a last minute massage,
				a quick haircut, or a relaxing spa day - ME TYME has your back.
			</Text>
		</Flex>
		<Image src="studio.jpg" boxSize="300px" borderRadius="20px" />
	</Flex>
);

export default About;
