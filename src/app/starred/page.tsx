import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormComp from '@/components/FormComp';

export default function StarredPage() {
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
        <FormComp />
      </Box>
    </Container>
  );
}
