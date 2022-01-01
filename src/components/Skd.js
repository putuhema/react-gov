import BackButton from './BackButton';

function Skd() {
  return (
    <div className="flex flex-col border ">
      <BackButton />
      <div className=" border-b text-center p-3 mb-5">
        <h1 className="font-bold text-lg">Surat Keterangan Domisili</h1>
      </div>
      <div className="p-5">
        <div className="flex-col mb-3">
          <label className="text-sm" htmlFor="nik">
            NIK
          </label>
          <input
            type="text"
            name="nik"
            id="nik"
            className="border w-full p-1"
          />
        </div>
        <div className="flex flex-row gap-4 mb-3 ">
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="nik">
              Nama
            </label>
            <input
              type="text"
              name="nik"
              id="nik"
              className="border w-full p-1 "
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="nik">
              Jenis Kelamin
            </label>
            <select name="gender" id="gender" className="border w-full p-1 ">
              <option value="Laki - Laki">Laki - Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-3">
          <div className="flex flex-col w-full">
            <label htmlFor="place" className="text-sm">
              Tempat Lahir
            </label>
            <input
              type="text"
              name="place"
              id="place"
              className="border w-full p-1"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="date" className="text-sm">
              Tanggal Lahir
            </label>
            <input type="date" className="border w-full p-1" />
          </div>
        </div>

        <div className=" text-green-500 text-center border border-green-500 bg-green-100 rounded font-bold p-2 hover:bg-green-200">
          Submit
        </div>
      </div>
    </div>
  );
}

export default Skd;
