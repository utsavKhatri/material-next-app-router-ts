import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStore } from '@/store/store';
const TaskCard = ({ title }: { title: string }) => {
  const task = useStore((store) =>
    store.tasks.find((task: { title: string }) => task.title == title)
  );
  const { deleteTask, setDraggedTask } = useStore();

  const colorSetter = (state: string) => {
    if (state == 'PLANNED') {
      return 'info';
    } else if (state == 'ONGOING') {
      return 'secondary';
    } else {
      return 'success';
    }
  };
  if (!task) return <Skeleton />;
  return (
    <Card
      elevation={1}
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <CardActionArea>
        <CardContent
          sx={{
            paddingBlock: '5px',
          }}
        >
          <Typography variant="body1" my={1.5} gutterBottom>
            {task?.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <IconButton
            color="error"
            aria-label="delete-icon"
            onClick={() => deleteTask(task?.title)}
          >
            <DeleteIcon />
          </IconButton>
          <Chip
            label={task?.state}
            color={colorSetter(task?.state || 'PLANNED')}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
