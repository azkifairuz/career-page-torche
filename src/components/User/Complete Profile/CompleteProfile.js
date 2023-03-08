
function CompleteProfil(params) {
    return(
        <div className="min-h-screen m-auto">
            <div className="w-3/4 bg-[#f8f9fa] border shadow-lg shadow-[#f8f9fa] p-5 m-5 rounded-lg" >
                <form className=" flex space-y-8 flex-col w-full">
                        
                    <div>
                        <label>Tentang Saya</label>
                        <textarea 
                        className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary " 
                        rows={4}
                        cols={100}
                        />
                    </div>
                    <div>
                        <label>Nama Lengkap</label>
                        <input 
                        className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary " 
                        
                        />
                    </div>
                    <div>
                        <label>tanggal Lahir</label>
                        <input 
                        type="date"
                        className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary " 
                        
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Jenis Kelamin</label>
                        <div className="flex space-x-2 items-center">
                            <input 
                            type="radio"
                            className="block  rounded-md border-2 focus:ring-primary  border-primary " 
                            value="Laki-Laki"
                            /><p>Laki-Laki</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <input 
                            type="radio"
                            className="block  rounded-md border-2 focus:ring-primary  border-primary " 
                            value="Perempuan"
                            /><p>Perempuan</p>
                        </div>
                    
                    </div>
                    <div>
                        <label>Nomor Telpon</label>
                        <input 
                        type="text"
                        className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary " 
                        
                        />
                    </div>
                    <div>
                        <label>Lokasi Saat ini</label>
                        <input 
                        type="text"
                        className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary " 
                        
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default CompleteProfil;