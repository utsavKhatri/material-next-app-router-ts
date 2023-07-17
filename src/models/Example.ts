'use client';
import { z } from 'zod';

export const ExampleSchema = z.object({
  name: z.string().nonempty(),
  age: z
    .string()
    .nonempty('Age is required')
    .transform((value) => parseInt(value, 10)),
  email: z.string().email('Email is not valid'),
  password: z
    .string()
    .nonempty('Password is required')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password is not valid should follow this pattern - 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character'
    ),
  phone: z
    .string()
    .regex(/^[0-9]+$/, 'Phone number is not valid')
    .transform((value) => parseInt(value, 10)),
});

export type ExampleSchemaType = z.infer<typeof ExampleSchema>;
