import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function MovieDesc() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full my-8"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold text-foreground text-xl">
          Popular Movies and TV Shows – JustWatch US
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-foreground/80">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
