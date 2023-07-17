import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useStore } from '@/store/store';

export default function AddTaskModal({ state }: { state: string }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { addTask } = useStore();
  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    if (!title) return setOpen(false);
    addTask({ title: title, state: state });
    setTitle('');
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            paddingBottom: '3px',
          }}
        >
          Add Task
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
