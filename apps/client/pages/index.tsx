import { Flex, Button, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import MainHeader from "@metyme/ui/components/Header";
import About from "@metyme/ui/components/About";
import Hero from "@metyme/ui/components/Hero";
import RequestServiceSection from "@metyme/ui/components/RequestServiceSection";
import { sendEmail } from "@metyme/ui/helpers/sendEmail";


const HomePage: NextPage = () => (
	<Flex w="100%" flexDirection="column">
		<MainHeader />
		<Flex w="100%" justify="center" mb="20px">
			<Button
				onClick={sendEmail}
				mt={4}
				bgColor="primary.500"
				color="white"
				w="200px"
			>
				Contact Me
			</Button>
		</Flex>
		<Flex height="60vh" overflow="hidden" position="relative">
			<Image
				src="tools.jpg"
				alt="Tools"
				objectFit="cover"
				objectPosition="center bottom" // Positioning the image to show the bottom half
				position="absolute" // Ensure proper positioning of the image
				width="100%"
				height="100%"
			/>
		</Flex>
		<About />
		<Hero />
		<RequestServiceSection />
	</Flex>
);

export default HomePage;
