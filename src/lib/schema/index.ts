import { z } from "zod";

const bookingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  serviceType: z.string().min(1, "Service type is required"),
  dateTime: z.string().min(1, "Date and time are required"),
  vehicleInfo: z.string().min(1, "Vehicle information is required"),
  notes: z.string().optional(),
  contactPreference: z.string().min(1, "Contact preference is required"),
});

export { bookingSchema };
