import { useDispatch } from 'react-redux';
import { 
  setGenreFilter, 
  setAuthorFilter, 
  setReadStatusFilter 
} from '../redux/filtersSlice';
import { 
  Button, 
  Input, 
  Stack, 
  Select,
  FormControl,  
  FormLabel     
} from '@chakra-ui/react';

const BookFilters = () => {
  const dispatch = useDispatch();

  return (
    <Stack direction={['column', 'row']} spacing={4} mb={8}>
      <FormControl>
        <FormLabel>Filter by Genre</FormLabel>
        <Select 
          onChange={(e) => dispatch(setGenreFilter(e.target.value))}
          placeholder="All Genres"
        >
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </Select>
      </FormControl>
      
      <FormControl>
        <FormLabel>Filter by Author</FormLabel>
        <Input 
          placeholder="Search author..."
          onChange={(e) => dispatch(setAuthorFilter(e.target.value))}
        />
      </FormControl>
      
      <FormControl>
        <FormLabel>Reading Status</FormLabel>
        <Select 
          onChange={(e) => dispatch(setReadStatusFilter(e.target.value))}
        >
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default BookFilters;