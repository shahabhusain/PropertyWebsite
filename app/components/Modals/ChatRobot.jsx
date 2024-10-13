import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { useCartStore } from "../../store/cart-store";

const ChatRobot = () => {
  const { isOpen, closeModal, openModal } = useCartStore((state) => state);
  console.log(isOpen);

  return (

      <Dialog
        open={isOpen}
        onOpenChange={(open) => (open ? openModal() : closeModal())}
      >
        <DialogContent className="sm:max-w-[425px]">
       
          <div className="grid gap-4 py-4">
            <h1>Modal</h1>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default ChatRobot;
