import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

function Sktm({ onInput }) {
  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Laki - Laki');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const isNotEmpty =
    nik.length > 0 &&
    name.length > 0 &&
    gender.length > 0 &&
    place.length > 0 &&
    date.length > 0;

  const onSubmit = (e) => {
    e.preventDefault();

    onInput({ nik, name, gender, place, date });
    setNik('');
    setName('');
    setGender('Laki - Laki');
    setPlace('');
    setDate('');

    isNotEmpty && navigate('/download');
  };

  return (
    <div className="flex flex-col border ">
      <BackButton />
      <div className=" border-b text-center p-3 mb-5">
        <h1 className="font-bold text-lg">Surat Keterangan Tidak Mampu</h1>
      </div>
      <form action="/download" onSubmit={(e) => onSubmit(e)}>
        <div className="p-5">
          <div className="flex-col mb-3">
            <label className="text-sm" htmlFor="nik">
              NIK
            </label>
            <input
              value={nik}
              onChange={(e) => setNik(e.target.value)}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
                id="gender"
                className="border w-full p-1 "
              >
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
                value={place}
                onChange={(e) => setPlace(e.target.value)}
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
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="border w-full p-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-green-500 text-center border border-green-500 bg-green-100 rounded font-bold p-2 hover:bg-green-200"
          >
            Download
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sktm;
