import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const About = () => (
	<Flex padding={{base: "20px", md: "50px"}} pos="relative" align="center" flexDirection={{base: "column", md: "row"}}>
		<Flex flexDir="column" padding="50px">
			<Heading>Welcome to ME TYME - Your Personal Beauty & Wellness Concierge</Heading>
			<Text fontSize="24px">
				your go-to destination for instant beauty and wellness services. Our
				innovative digital platform is designed with you in mind, offering a
				seamless way to discover and book last-minute appointments on the go. ME
				TYME connects you directly with available beauty and wellness services,
				turning unexpected openings into immediate opportunities. With our
				user-friendly mobile and web applications, finding and booking your
				preferred service at the last minute has never been easier. Say goodbye
				to waiting lists and hello to a personalised, instant solution for your
				beauty and wellness needs. Your time, your way, with ME TYME.
			</Text>
		</Flex>
		<Image src="studio.jpg" boxSize="300px" borderRadius="20px" />
	</Flex>
);

export default About;
