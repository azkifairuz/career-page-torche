import { useState } from "react";
import Biodata from "./Biodata/Form";
import Education from "./Education/Form";
import Experience from "./work expereience/Form";

function CompleteProfil() {
  const [page,setPage] =useState(1)
  function nextPage() {
      return setPage(page+1)
  }
  function backPage() {
    return setPage(page-1)
}

function viewPager(){
  if (page === 1) {
    return (
        <Biodata next={nextPage}/>
    )
  }
  if (page === 2) {
    return (
        <Education back={backPage}  next={nextPage}/>
    )
  }
  if (page === 3) {
    return (
        <Experience back={backPage}  next={nextPage}/>
    )
  }
}
  return(
    <div className="min-h-screen w-full md:w-10/12 flex items-center justify-center m-auto">
        {viewPager()}
    </div>
  )

}

export default CompleteProfil;
