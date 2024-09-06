import type { APIRoute } from "astro";
import { z } from "zod";

export const prerender = false;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

export const POST: APIRoute = async ({ request }) => {
  // get name email and message from request body
  const { name, email, message } = await request.json();
  console.log("Form data:", { name, email, message });

  // validate the data
  const validationResult = formSchema.safeParse({ name, email, message });
  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        success: false,
        message: validationResult.error.errors[0].message
      }),
      { status: 400 }
    );
  }

  // TODO: send data

  return new Response(
    JSON.stringify({
      success: true,
      message: "Message sent successfully"
    }),
    { status: 200 }
  );
};
