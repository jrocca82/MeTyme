import { Flex, Text, Image, Heading, Button } from "@chakra-ui/react";
import { sendEmail } from "../helpers/sendEmail";

const RequestServiceSection = () => (
	<Flex padding={{base: "20px", md: "50px"}} pos="relative" align="center" flexDirection={{base: "column-reverse", md: "row"}}>
		<Flex flexDir="column" padding="50px">
			<Heading>Request a Last Minute Service...</Heading>
			<Text fontSize="24px">
				In order to request a last minute service, please email us with the time, location, and service requested. We will then be in contact to help you book your service as quickly as possible!
			</Text>
			<Button alignSelf="center" my="20px" w="200px" bgColor="primary.500" color="white" padding="10px" onClick={sendEmail}>Request a last minute service</Button>
		</Flex>
		<Image src="incense.jpg" boxSize="300px" borderRadius="20px" />
	</Flex>
);

export default RequestServiceSection;
