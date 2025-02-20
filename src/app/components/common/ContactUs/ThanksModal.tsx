import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
function ThanksModal({
  message="Thank you for contacting us.",
  subMessage="We will get back to you shortly. Please be sure to check your spam folder too.",
  open,
  setOpen,
}: {
  message?: string;
  subMessage?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent
          size="medium"
          className="flex w-full max-w-2xl max-w-fit max-w-lg justify-center rounded-lg bg-Primary-Mordor-Blue-Bg-100 p-6"
        >
          {/* Header */}
          <DialogHeader className="flex justify-center text-center">
            <DialogTitle className="text-center text-xl font-bold text-Primary-Blue-950 Display-Semibold-32">
              {message}
            </DialogTitle>
            <p className="mt-2 text-center text-gray-600">
              {subMessage}
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}

export default ThanksModal;
