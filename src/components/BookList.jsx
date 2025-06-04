import { useDispatch, useSelector } from 'react-redux';
import { toggleRead, deleteBook } from '../redux/booksSlice';
import { Box, Heading, List, ListItem, Button, Badge, Flex, Text } from '@chakra-ui/react';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const filteredBooks = books.filter(book => {
    return (
      (filters.genre === '' || book.genre === filters.genre) &&
      (filters.author === '' || book.author.includes(filters.author)) &&
      (filters.readStatus === 'all' || 
       (filters.readStatus === 'read' && book.isRead) ||
       (filters.readStatus === 'unread' && !book.isRead))
    );
  });

  return (
    <Box mt={8}>
      <Heading size="md">Book Library</Heading>
      <List spacing={3} mt={4}>
        {filteredBooks.map(book => (
          <ListItem key={book.id} p={4} borderWidth="1px" borderRadius="lg">
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight="bold">{book.title}</Text>
                <Text>Author: {book.author}</Text>
                <Text>Genre: {book.genre}</Text>
                <Badge colorScheme={book.isRead ? 'green' : 'red'}>
                  {book.isRead ? 'Read' : 'Unread'}
                </Badge>
              </Box>
              <Box>
                <Button 
                  size="sm" 
                  colorScheme={book.isRead ? 'gray' : 'green'} 
                  onClick={() => dispatch(toggleRead(book.id))}
                  mr={2}
                >
                  {book.isRead ? 'Mark Unread' : 'Mark Read'}
                </Button>
                <Button 
                  size="sm" 
                  colorScheme="red" 
                  onClick={() => dispatch(deleteBook(book.id))}
                >
                  Delete
                </Button>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BookList;