import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const About = () => (
	<Flex padding={{base: "20px", md: "50px"}} pos="relative" align="center" flexDirection={{base: "column", md: "row"}}>
		<Flex flexDir="column" padding="50px">
			<Heading>Welcome to ME TYME - Your Personal Beauty & Wellness Concierge</Heading>
			<Text fontSize="24px">
				Need a Beauty or Wellness Service ASAP? We've Got you Covered!
				AT ME TYME, we're bringing the beauty to you! No need to navigate countless
				websites or make any calls; simply tell us what service you're looking for, 
				and we'll find the best match for you. Whether it's a last minute massage,
				a quick haircut, or a relaxing spa day - ME TYME has your back.
				How it Works:
				1. Tell us your Request: Fill out a quick form telling us what service you need, when and where https://forms.office.com/r/hrzJRByU2h  
				2. We Find the best match: Our team will search high and low to find the perfect service for you.
				3. Recieve Recommendations: We'll send you personalised recommendations - choose one that suits your best.
				4. Enjoy your ME TYME moment: Sit back, relax, and let us handle the rest. Your self-care experience is just a request away!
			</Text>
		</Flex>
		<Image src="studio.jpg" boxSize="300px" borderRadius="20px" />
	</Flex>
);

export default About;
