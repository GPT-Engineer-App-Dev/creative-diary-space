import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences with the world.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" />
        </Box>
        <Text fontSize="md">Stay tuned for more updates!</Text>
        <Link href="/about" color="teal.500">Learn more about me</Link>
        <Button colorScheme="teal" onClick={() => navigate('/add-post')}>Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;