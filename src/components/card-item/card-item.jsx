// @ts-nocheck
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardImagem,
    CardButton
  } from "@/components/ui/card"

  export const CardItem = () => {
    return (
        
        <Card>
        <CardHeader>
          <CardImagem></CardImagem>  
          <CardTitle>Cat Name</CardTitle>
          <CardDescription>Breed</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Age</p>
        </CardContent>
        <CardFooter>
          <p>Description</p>
        </CardFooter>
        <CardButton>
            Edit
        </CardButton>
      </Card>
      
    );
  }

  