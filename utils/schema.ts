import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "ชื่อต้องมีความยาวอย่างน้อย 3 ตัวอักษร" })
    .max(50),
  lastName: z
    .string()
    .min(3, { message: "นามสกุลต้องมีความยาวอย่างน้อย 3 ตัวอักษร" })
    .max(50),
  userName: z
    .string()
    .min(3, { message: "ชื่อผู้ใช้ต้องมีความยาวอย่างน้อย 3 ตัวอักษร" })
    .max(50),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const error = result.error?.errors.map((error) => error.message);
    throw new Error(error.join(", "));
  }
  return result.data;
};
