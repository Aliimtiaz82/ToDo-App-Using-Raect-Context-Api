import { RiDeleteBin5Line } from "react-icons/ri";

export function ClearAllBtn({clearDispaly}){
    return(
        <button className="btn btn-danger"
        onClick={clearDispaly}><RiDeleteBin5Line /> clear
</button>
    )
   
}