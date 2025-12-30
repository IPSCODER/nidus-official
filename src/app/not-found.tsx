
"use client";

import { Btn } from "@/components/ui/Btn";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h1 className="mt-4 text-2xl md:text-7xl font-extrabold font-panchangBold uppercase">
        Page Not Found
      </h1>
      <p className="mt-2 text-md italic md:text-xl max-w-md">
        The page you’re looking for doesn’t exist, was moved, or never existed. Please check the URL or return to the homepage.
      </p>

      <Btn
        href="/"
        className="mt-5"
      >
       <b className="flex flex-row items-center gap-1" >
        Go Back Home
       </b>
      </Btn>

      <div className="mt-10">
 
      </div>
    </div>
  );
}
