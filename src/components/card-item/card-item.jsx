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
          <CardTitle class="font-bold text-xl">Cat Name</CardTitle>
          <CardDescription class="text-lg">Breed</CardDescription>
        </CardHeader>
        <CardContent class="px-6">
          <p>Age</p>
        </CardContent>
        <CardFooter class="mt-6 ml-6 mb-4">
          <p>Description</p>
        </CardFooter>
        <CardButton>
            Edit
        </CardButton>
      </Card>
      
    );
  }

  