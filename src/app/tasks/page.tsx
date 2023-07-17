import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStore } from '@/store/store';
import StoreInit from '@/components/StoreInit';

export default function TasksPage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
    </Container>
  );
}
