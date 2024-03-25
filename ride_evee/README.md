# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<div
        className={`origin-top-right sticky right-0 mt-2 w-48 rounded-md shadow-lg text-gray-200 ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? '' : 'hidden'
          }`}
      >
        <div className="py-1">
          <button
            onClick={() => handleOptionClick('Musics')}
          >
            Musics
          </button>
          <button
            onClick={() => handleOptionClick('Videos')}
          >
            Videos
          </button>
          <button
            onClick={() => handleOptionClick('Programs')}
           
          >
            Programs
          </button>
          <button
            onClick={() => handleOptionClick('APKs')}
          >
            APKs
          </button>
          <button
            onClick={() => handleOptionClick('Images')}>
            Images
          </button>
        </div>
      </div>





      <button
            type="button"
            onClick={toggleDropdown}
            className="toggle">
            {selectedOption}
            <img src={profileIcon} alt="logo4" /></button>



             const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);

    };
  };