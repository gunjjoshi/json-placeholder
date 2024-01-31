import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Box p={8}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          JSONPlaceholder API
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {data.map((item) => (
            <Box key={item.id} bg="gray.200" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>
                {item.title}
              </Heading>
              <Text color="black.600">{item.body}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
