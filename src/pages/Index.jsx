import { Container, Text, VStack, Heading, Box, Image, Link, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post.", image: "/images/blog-image.jpg" },
    { id: 2, title: "Second Post", content: "This is the second post.", image: "/images/blog-image.jpg" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences with the world.</Text>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <Box boxSize="sm" mt={4}>
              <Image src={post.image} alt={post.title} />
            </Box>
            <HStack mt={4} spacing={4}>
              <Button colorScheme="teal" onClick={() => navigate(`/edit-post/${post.id}`)}>Edit</Button>
              <Button colorScheme="red" onClick={() => handleDelete(post.id)}>Delete</Button>
            </HStack>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={() => navigate('/add-post')}>Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;