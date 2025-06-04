import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { 
  Button, 
  Input, 
  Stack, 
  Select,
  FormControl,  
  FormLabel     
} from '@chakra-ui/react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Fiction');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: Date.now(),
      title,
      author,
      genre,
      isRead: false
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </FormControl>
        <FormControl>
          <FormLabel>Genre</FormLabel>
          <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Book</Button>
      </Stack>
    </form>
  );
};

export default AddBook;