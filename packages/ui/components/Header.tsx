import { Flex, Image, Text } from "@chakra-ui/react";

const MainHeader = () => (
	<Flex
		w="100%"
		align="center"
		justify="center"
		flexDir="column"
		pos="relative"
		padding="20px"
	>
		<Image src="logo.png" boxSize="150px" objectFit="contain" />
		<Text fontSize="36px">Your Time, Your Wellness, Your Way</Text>
	</Flex>
);

export default MainHeader;
