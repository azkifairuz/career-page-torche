import { useState } from "react";
import Biodata from "./BiodataForm";
import Education from "./EducationForm";

function CompleteProfil() {
  const [page,setPage] =useState(1)
  function handlePage() {
      return setPage(page+1)
  }
  
  if (page === 1) {
    return (
      <div className="min-h-screen m-auto">
        <Biodata click={handlePage}/>
        
      </div>
    )
  }
  if (page === 2) {
    return (
      <div className="min-h-screen m-auto">
        <Education click={handlePage}/>
      </div>
    )
  }
}

export default CompleteProfil;
