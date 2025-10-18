import { forwardRef } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ButtonEnhancedProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const ButtonEnhanced = forwardRef<
  HTMLButtonElement,
  ButtonEnhancedProps
>(
  (
    {
      className,
      loading,
      icon,
      iconPosition = "left",
      children,
      disabled,
      asChild,
      ...props
    },
    ref
  ) => {
    // When asChild is true, we need to be careful about what we render
    // to avoid React.Children.only errors
    if (asChild) {
      return (
        <Button
          className={cn("cursor-pointer", className)}
          disabled={disabled || loading}
          ref={ref}
          asChild={asChild}
          {...props}
        >
          {children}
        </Button>
      );
    }

    return (
      <Button
        className={cn("cursor-pointer", className)}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : icon && iconPosition === "left" ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        {children}
        {icon && iconPosition === "right" && !loading && (
          <span className="ml-2">{icon}</span>
        )}
      </Button>
    );
  }
);

ButtonEnhanced.displayName = "ButtonEnhanced";
