function Biodata(props) {
  return (
    <>
      <div className="lg:w-[800px] bg-[#f8f9fa] border shadow-lg shadow-[#f8f9fa] p-5 m-10 rounded-lg">
        <form className=" flex space-y-8 flex-col w-full mb-5">
          <h1 className="text-2xl font-bold">Data Diri</h1>
          <div>
            <label>Tentang Saya</label>
            <textarea
              className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              rows={4}
              cols={100}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <div className=" w-1/2">
              <label>Nama Lengkap</label>
              <input className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary " />
            </div>

            <div className="w-1/2">
              <label>tanggal Lahir</label>
              <input
                type="date"
                className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
              />
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
            <label className="block mb-2">Jenis Kelamin</label>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <input
                  type="radio"
                  className="block  rounded-md border-2 focus:ring-primary  border-primary "
                  value="Laki-Laki"
                  
                />
                <label id="L">Laki-Laki</label>
              </div>
              <div className="flex space-x-2 items-center">
                <input
                  type="radio"
                  className="block  rounded-md border-2 focus:ring-primary  border-primary "
                  value="Perempuan"
                />
                <label id="p">Perempuan</label>
              </div>
            </div>
          </div>

          <div>
            <label>Lokasi Saat ini</label>
            <input
              type="text"
              className="block mt-2 p-2.5 w-full text-sm rounded-md border-2 focus:ring-primary  border-primary "
            />
          </div>
          <button
          onClick={props.next}  
          className=" bg-blue-500 text-white rounded-md p-2">
            Next
          </button>
        </form>
      </div>
      ;
    </>
  );
}

export default Biodata;
