import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters long." }).trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  name: z.string().trim(),
});

export const SigninFormSchema = z.object({
  //   username: z.string().min(2, { message: "Username must be at least 2 characters long." }).trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z.string().trim(),
});

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/heic"];
export const TimelineCreateFormSchema = z.object({
  year: z.string().trim(),
  image_1: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported."),
  image_2: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported."),
  image_3: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported."),
});

export const TimelineUpdateFormSchema = z.object({
  year: z.string().trim(),
  image_1: z
    .any()
    .refine((file) => file?.size <= 0)
    .or(
      z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported.")
    ),
  image_2: z
    .any()
    .refine((file) => file?.size <= 0)
    .or(
      z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported.")
    ),
  image_3: z
    .any()
    .refine((file) => file?.size <= 0)
    .or(
      z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported.")
    ),
});

export const EditProfileFormSchema = z.object({
  username: z
    .string()
    .length(0)
    .or(z.string().min(2, { message: "Username must be at least 2 characters long." }).trim()),
  email: z
    .string()
    .length(0)
    .or(z.string().email({ message: "Please enter a valid email." }).trim()),
  password: z
    .string()
    .length(0)
    .or(
      z
        .string()
        .min(8, { message: "Be at least 8 characters long" })
        .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
        .regex(/[0-9]/, { message: "Contain at least one number." })
        .regex(/[^a-zA-Z0-9]/, {
          message: "Contain at least one special character.",
        })
        .trim()
    ),
  name: z.string().trim(),
  bio: z.string().trim(),
});

export const PostCreateFormSchema = z.object({
  year: z.number().gte(1900, { message: "Year must be above 1899" }).lte(2025, { message: "Year must be below 2026" }),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .heic formats are supported."),
  description: z.string().trim(),
  event_date: z.coerce.date(),
});
