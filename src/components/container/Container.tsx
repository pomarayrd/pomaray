import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Container = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children, ...rest }, ref) => {
    return (
        <main ref={ref as React.RefObject<HTMLDivElement>} className={cn("max-w-5xl mx-auto p-10", className)} {...rest}>
            {children}
        </main>
    );
});

Container.displayName = "Pomaray.Container";

export default Container;
