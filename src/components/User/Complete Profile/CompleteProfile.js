import { useState } from "react";
import Biodata from "./BiodataForm";
import Education from "./EducationForm";

function CompleteProfil() {
  const [page,setPage] =useState(1)
  function nextPage() {
      return setPage(page+1)
  }
  function backPage() {
    return setPage(page-1)
}

  if (page === 1) {
    return (
      <div className="min-h-screen m-auto">
        <Biodata next={nextPage}/>
        
      </div>
    )
  }
  if (page === 2) {
    return (
      <div className="min-h-screen m-auto">
        <Education back={backPage}  next={nextPage}/>
      </div>
    )
  }
}

export default CompleteProfil;
