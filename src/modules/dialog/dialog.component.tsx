import { Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { ReactNode } from "@tanstack/react-router";
import { FiX } from "react-icons/fi";

type DialogComponentProps = {
  content: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const DialogComponent = (props: DialogComponentProps) => {
  const { content, open, onOpenChange } = props;

  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay className="z-50 fixed inset-0 bg-[rgba(0,0,0,0.4)] data-[state=open]:animate-overlayShow" />
        <Content
          className={`
            z-50 fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] 
            -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] 
            focus:outline-none transition-all
            flex items-center justify-center
          `}
        >
          {content}
          <button
            className={`
              z-50 absolute right-2 top-2 text-text cursor-pointer 
              rounded-full bg-icon hover:bg-icon-hover transition-all 
              border-none flex items-center justify-center p-1
            `}
          >
            <FiX className="h-6 w-6" onClick={() => onOpenChange(false)} />
          </button>
        </Content>
      </Portal>
    </Root>
  );
};
