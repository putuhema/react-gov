import { Link } from 'react-router-dom';
import logo from '../img/mamuju.png';

function Input({ setOption, selectedOption }) {
  return (
    <div className="flex flex-1">
      <div className="border border-b-slate-400 min-h-full p-5 ">
        <img src={logo} alt="" />
      </div>
      <div className="border border-b-slate-400 min-h-full p-5 ">
        <p className="text-justify">
          <span className="font-bold">BikinSurat</span> adalah layanan
          E-Goverment yang bertujuan untuk Pembuatan Surat agar mempercepat
          proses administrasi antara pemerintah desa dengan masyarakat.
        </p>
        <div className="flex flex-col mt-5">
          <label htmlFor="option">Jenis Surat</label>
          <select
            onClick={(e) => setOption(e.target.value)}
            className="border p-1 rounded mt-2 focus:outline-none"
            name="option"
            id="option"
          >
            <option value="0">Surat Keterangan Tidak Mampu</option>
            <option value="1">Surat Keterangan Domisili</option>
          </select>
        </div>
        <Link to={`/${selectedOption}`}>
          <div className="border w-full p-2 mt-2 text-center  bg-green-600 h hover:bg-green-700 text-white font-bold rounded">
            Masukkan Data
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Input;
