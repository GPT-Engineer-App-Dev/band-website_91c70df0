// Complete the Index page component for a band's touring website
import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" padding="4" bg="gray.900" color="white">
        <Heading as="h1" size="2xl" mb="2">
          The Rockers
        </Heading>
        <Text fontSize="xl" mb="6">
          Join us on our world tour!
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzEzNzExNTQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rockers Band" mb="4" />
        <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg" mb="4">
          Get Tickets
        </Button>
        <Text fontSize="lg" mb="4">
          Follow us on social media
        </Text>
        <Flex gap="4">
          <Link href="https://instagram.com/therockers" isExternal>
            <FaInstagram size="28" />
          </Link>
          <Link href="https://twitter.com/therockers" isExternal>
            <FaTwitter size="28" />
          </Link>
          <Link href="https://facebook.com/therockers" isExternal>
            <FaFacebookF size="28" />
          </Link>
          <Link href="https://spotify.com/therockers" isExternal>
            <FaSpotify size="28" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
