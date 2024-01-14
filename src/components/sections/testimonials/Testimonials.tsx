import LeftTestSVG from "@/components/svgs/LeftTestSVG";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { TESTIMONIALS } from "./TestimonialsData";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="relative bg-secondaryBackground dark:bg-secondaryBackgroundDark py-24">
      <div className="container">
        <div className="ml-10">
          <Heading className="text-center">What Our Users Says</Heading>
          <Paragraph className="text-center mb-12">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</Paragraph>
        </div>
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} />
          ))}
        </div>
      </div>
      <LeftTestSVG className="absolute left-0 bottom-0" />
    </section>
  );
}