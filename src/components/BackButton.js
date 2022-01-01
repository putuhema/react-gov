import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function BackButton() {
  return (
    <>
      <Link to="/">
        <div className="flex items-center gap-2 mb-3 pl-3 pt-3">
          <FaArrowLeft /> <span>Back</span>
        </div>
      </Link>
    </>
  );
}

export default BackButton;
