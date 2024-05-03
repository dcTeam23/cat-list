import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa";
import "./button-add-cat.css"

const AddButton = () =>{
return(
    <>
        <Button className="button" variant="outline"><FaPlus /> Add cat</Button>
    </>
)
}

export default AddButton