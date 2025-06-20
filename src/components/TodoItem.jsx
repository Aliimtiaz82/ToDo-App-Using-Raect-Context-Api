import { FaDeleteLeft } from "react-icons/fa6";


export function TodoItem ({ItemName , ItemDate , delBtn}){

 return  <div className="row">
 <div className="col-md-6 col-12 bg-light">
   <div className="mb-1">
     <h5>{ItemName}</h5>
   </div>
 </div>

 <div className="col-md-4 col-6">
   <div className="mb-3">{ItemDate}</div>
 </div>
 <div className="col-md-2 col-6 d-grid">
   <button className="btn btn-danger btn-lg"
   onClick={() =>delBtn(ItemName)}><FaDeleteLeft /> remove</button>
 </div>
</div>
}
    