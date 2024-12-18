"use client";

import {
    StylizedToast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewPort,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <StylizedToast
            key={id}
            {...props}
            className="border-none bg-dark-1 text-white"
          >
            <div className="grid gap-1 ">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </StylizedToast>
        );
      })}
      <ToastViewPort />
    </ToastProvider>
  );
}