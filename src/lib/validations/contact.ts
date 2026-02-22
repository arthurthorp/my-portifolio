import * as z from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'NAME_MIN' }).max(100, { message: 'NAME_MAX' }),
  email: z.string().email({ message: 'EMAIL_INVALID' }),
  message: z.string().min(10, { message: 'MESSAGE_MIN' }).max(1000, { message: 'MESSAGE_MAX' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
