import * as React from "react"


import { cn } from "@/lib/utils"
import Cat from "@/components/card-item/img/cat.png"


const CardImagem = () => {
  return (
    <div className="h-60 w-60 rounded-full bg-gray-200 mb-8 ml-11">
      <img src={Cat}/>
    </div>

  );
}

interface ButtonProps {
  children: React.ReactNode;
}

const CardButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex ml-5 mb-4 rounded">{children}</button>
    </>
  )
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn(
      "border border-solid border-gray-300 max-w-sm rounded overflow-hidden shadow-lg rounded-sm border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pt-0 pl-6 pr-0 pb-0", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p 
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-3 ml-0 mb-4 flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { CardButton, CardImagem, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
