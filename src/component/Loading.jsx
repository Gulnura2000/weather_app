import { useEffect, useState } from "react"
import { CSSProperties } from "react";
import PropagateLoader  from "react-spinners/ClipLoader";
const Loading = ()=>{
// const [loading,setLoading] = useState(false)

// useEffect(()=>{
// setLoading(true);
// setTimeout(()=>{setLoading(false)} ,2000)
// },[])

return(
    <div>
{/* <div className="container">
    { loading ? <>
    
     
    </>:<>gulnura</> }
</div> */}

    {/* <ClipLoader
color={"#000000"}
// loading={loading}
size={150}/> */}
<div style={{'height':"100vh"}} className="col-12 d-flex justify-content-center align-items-center ">
    <PropagateLoader
  color="rgba(246, 246, 246, 1)"
  size={50}
  />
</div>

</div>


)

}

export default Loading