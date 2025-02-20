import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
function ThanksModal({
  open,
  setOpen,
}: {
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
            <DialogTitle className="text-center text-xl font-bold text-Primary-Blue-950">
              Thank you for subscribing!
            </DialogTitle>
            <p className="mt-2 text-center text-gray-600">
              You&apos;re all set. Keep an eye on your email for registration
              details—we&apos;ll be in touch soon.
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}

export default ThanksModal;
