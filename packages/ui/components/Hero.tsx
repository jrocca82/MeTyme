import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const Hero = () => (
	<Flex padding="50px" pos="relative">
		<Image src="yoga.jpg" boxSize="300px" borderRadius="20px" />
		<Flex flexDir="column" padding="50px">
			<Heading>At ME TYME...</Heading>
			<Text fontSize="24px">
				we believe self-care is a non-negotiable aspect of life that should be
				readily accessible to all, no matter the constraints of their schedule
				or lifestyle. ME TYME is not just in the business of booking—it's in the
				business of facilitating self-care autonomy, enabling individuals to
				effortlessly incorporate wellness into their lifestyle, promoting a
				balanced and enriched life.
			</Text>
		</Flex>
	</Flex>
);

export default Hero;
