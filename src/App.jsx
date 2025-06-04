import { Box, Heading } from '@chakra-ui/react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import BookFilters from './components/BookFilters';

function App() {
  return (
    <Box maxWidth="1200px" margin="0 auto" p={8}>
      <Heading mb={8}>Book Library</Heading>
      <AddBook />
      <BookFilters />
      <BookList />
    </Box>
  );
}

export default App;