'use client';
import { Box, Stack, Typography } from '@mui/material';
import TaskCard from './TaskCard';
import { useStore } from '@/store/store';
import AddTaskModal from './AddTaskModal';
const Columns = ({ state }: { state: string }) => {
  const { tasks, setDraggedTask, draggedTask, moveTask } = useStore();
  const finalTask = tasks.filter(
    (task: { state: string }) => task.state === state
  );
  return (
    <Box
      sx={{
        padding: '0.7rem',
      }}
      boxShadow={1}
      borderRadius={2}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        setDraggedTask(null);
        if (!draggedTask) return;
        moveTask({ title: draggedTask, state: state });
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={'row'}
      >
        <Typography fontWeight={'bold'}>{state}</Typography>
        <AddTaskModal state={state} />
      </Box>
      <Stack spacing={2}>
        {finalTask.map((task: { title: string }) => (
          <TaskCard key={task.title} title={task.title} />
        ))}
      </Stack>
    </Box>
  );
};

export default Columns;
