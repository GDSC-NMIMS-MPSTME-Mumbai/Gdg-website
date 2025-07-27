import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"
import { ThemeProvider } from "./components/ui/theme-provider"
function App() {
  const [show, setShow] = useState<boolean>(false)

  return (
    <ThemeProvider defaultTheme="dark">
    <div className="flex min-h-svh flex-col items-center justify-center p-4 font-sans relative">

      <motion.div
        initial={{ scale: 0.8, opacity: 0, boxShadow: "0px 0px #000" }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="z-10"
      >
        <Button
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Modal" : "Show Modal"}
        </Button>
      </motion.div>

      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            key="animated-modal-with-accordion" 
            initial={{ opacity: 0, scale: 0.8, y: -50 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }}    
            exit={{ opacity: 0, scale: 0.8, y: 50 }}       
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2
                       rounded-xl shadow-2xl p-6 border border-gray-200
                       z-20 w-11/12 max-w-lg"
          >
            <div className="flex items-center justify-center w-full max-w-sm mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    It uses React's state management and Framer Motion for animations,
                    along with Shadcn UI for the Accordion component.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I customize it?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! You can modify the content, styles, and animation
                    properties to fit your needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </ThemeProvider>
  )
}

export default App
