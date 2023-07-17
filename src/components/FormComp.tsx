'use client';

import { ExampleSchema, ExampleSchemaType } from '@/models/Example';
import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormComp = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ExampleSchemaType>({
    resolver: zodResolver(ExampleSchema),
  });

  const onSubmit: SubmitHandler<ExampleSchemaType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Box my={2} justifyContent={'center'}>
        <Typography variant="h3">Form Comp</Typography>
        <Button
          onClick={() => {
            trigger();
          }}
          variant="contained"
          size="small"
          color="primary"
          sx={{
            marginInline: 'auto',
          }}
        >
          Display Data Requirements
        </Button>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FormControl>
            <TextField
              error={errors.name && true}
              label="Name"
              type="text"
              id="name"
              {...register('name')}
              variant="outlined"
              size="small"
              helperText={errors.name && errors.name.message}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={errors.email && true}
              label="Email"
              type="email"
              id="email"
              {...register('email')}
              variant="outlined"
              size="small"
              helperText={errors.email && errors.email.message}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={errors.password && true}
              label="Password"
              type="password"
              id="password"
              {...register('password')}
              variant="outlined"
              size="small"
              helperText={errors.password && errors.password.message}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={errors.phone && true}
              label="Phone"
              type="text"
              id="phone"
              {...register('phone')}
              variant="outlined"
              size="small"
              helperText={errors.phone && errors.phone.message}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={errors.age && true}
              label="Age"
              type="number"
              id="age"
              {...register('age')}
              variant="outlined"
              size="small"
              helperText={errors.age && errors.age.message}
            />
          </FormControl>
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default FormComp;
