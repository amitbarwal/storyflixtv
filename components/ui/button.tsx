import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'glass';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
                    variant === 'default' && "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40",
                    variant === 'outline' && "border-2 border-white/20 hover:border-white/40 text-white bg-transparent",
                    variant === 'ghost' && "hover:bg-white/10 text-white",
                    variant === 'glass' && "glass-card hover:bg-white/10 text-white border-white/10 hover:border-white/20",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
