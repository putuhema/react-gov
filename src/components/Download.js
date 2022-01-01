import BackButton from './BackButton';
import { FcDocument } from 'react-icons/fc';

function Download({ data }) {
  return (
    <div className="p-3 w-max mx-auto">
      <BackButton />
      <p className="text-center  p-2 text-lg">
        Suratmu telah dibuat, silahkan diunduh
      </p>
      <div className=" flex flex-col items-center mb-3">
        <div className=" text-8xl">
          <FcDocument />
        </div>
        <p className="text-sm text-blue-500">
          surat_keterangan_tidak_mampu.docx
        </p>
      </div>
      <button className="w-full mx-auto bg-green-500 font-bold text-white text-lg rounded hover:bg-green-600 p-2">
        Download
      </button>
    </div>
  );
}

export default Download;
