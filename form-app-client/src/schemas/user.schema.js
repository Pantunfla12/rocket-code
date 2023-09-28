import * as z from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  secondName: z.string(),
  paternalLastName: z
    .string()
    .min(1, { message: "Paternal last name is required" }),
  maternalLastName: z.string(),
  email: z.string().email({
    message: "Invalid email adress",
  }),
  phoneNumber: z.string().regex(new RegExp(/^[0-9]{10}$/), {
    message: "Please enter a valid phone number",
  }),

  birthdate: z.string().min(1, { message: "Please select a date" }),
});
