"use client";

import { Btn } from "@/components/ui/Btn";
import { FormFieldInput, FormTextArea } from "@/components/ui/CustomFormFields";
import { Form } from "@/components/ui/form";
import MainHeading from "@/components/ui/MainHeading";
import MainText from "@/components/ui/MainText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";


const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." })
    .regex(/^[A-Za-z0-9 ]+$/, {
      message: "Username cannot contain special characters.",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .refine((val) => !val.includes(" "), {
      message: "Email cannot contain spaces.",
    }),
  mobile: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits." }),
  message: z
    .string()
    .min(1, { message: "Message cannot be empty." })
    .regex(/^[A-Za-z0-9,\s./!?()&'"-]*$/, {
      message:
        "Message contains invalid characters. Allowed: letters, numbers, spaces, and basic punctuation.",
    })
    .refine((val) => !/\s{2,}/.test(val), {
      message: "Message cannot contain consecutive spaces.",
    }),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactSection() {

    const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const formatedData = {
      ...data,
      name: data?.name,
      message: data?.message
    };
    try {
      console.log(formatedData);
      
      form.reset();
    } catch (err) {
      return err;
    }
  };
  return (
    <section className="relative py-24 px-2 md:px-4 overflow-hidden pt-36">
      <div className="mx-auto grid md:grid-cols-2 md:gap-16 items-start md:px-6">
        {/* Left: Headline and Text */}
        <div className="relative z-10">
        <MainHeading className="md:text-[13vw] md:ml-10" >
              Let&apos;s Talk
        </MainHeading>
            <MainText>
              If you have any questions, please do not hesitate to send us a message. We aim to reply within 24 hours.
            </MainText>
          <hr className="border-gray-600 my-6 max-w-sm" />
      
        </div>

        {/* Right: Contact Form */}
        <div className="relative z-10">
          <h3 className="text-3xl md:text-[3vw] font-bold mb-8 font-panchang-medium">We’re Here to Help</h3>
              <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <FormFieldInput
          control={form.control}
          label="Name"
          maxLength={20}
          name="name"
          placeholder="Enter you name"
          type="name"
        />

        <FormFieldInput
          control={form.control}
          label="Email"
          maxLength={100}
          name="email"
          placeholder="Enter Your Email"
          type="email"
        />

        <FormFieldInput
          control={form.control}
          label="Phone Number"
          maxLength={10}
          name="mobile"
          placeholder="Enter Your 10 digit number"
          type="phone"
        />

        <FormTextArea
          control={form.control}
          label="Message"
          maxLength={200}
          name="message"
          placeholder="Yout Message..."
        />

        <Btn type="submit" className="!px-20 " >Submit</Btn>
      </form>
    </Form>
        </div>
      </div>

      {/* Optional radial background effect */}
      <div className="absolute  left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-radial from-/10 to-transparent rounded-full pointer-events-none z-0 blur-2xl" />
    </section>
  );
}
