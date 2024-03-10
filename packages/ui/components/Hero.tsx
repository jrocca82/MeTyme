import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const Hero = () => (
	<Flex padding={{ base: "20px", md: "50px" }} pos="relative" align="center" flexDirection={{ base: "column", md: "row" }}>
		<Flex flexDir="column" padding="50px">
			<Heading>Why ME TYME?</Heading>
			<Text fontSize="24px">
				We believe self-care is a non-negotiable aspect of life that should be readily accessible to all, no matter the constraints of their schedule or lifestyle. ME TYME is not just in the business of booking—it's in the business of facilitating self-care autonomy, enabling you to effortlessly incorporate wellness into your lifestyle, promoting a balanced and enriched life.
			</Text>
		</Flex>
		<Image src="yoga.jpg" boxSize="300px" borderRadius="20px" />
	</Flex>
);

export default Hero;
