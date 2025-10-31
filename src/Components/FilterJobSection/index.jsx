import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './index.css';

const empArr = [
  { id: 'INTERNSHIP', label: 'Internship' },
  { id: 'PARTTIME', label: 'Part Time' },
  { id: 'FULLTIME', label: 'Full Time' },
  { id: 'FREELANCE', label: 'Freelance' },
];

const salleryArr = [
  { id: 1000000, label: '10 LPA & Above' },
  { id: 2000000, label: '20 LPA & Above' },
  { id: 3000000, label: '30 LPA & Above' },
  { id: 4000000, label: '40 LPA & Above' },
];

const FilterJobSection = (props) => {
  const { allMyValues, setMyValues } = props;

  const [allValues, setValues] = useState({
    userProfile: {},
    loader: true,
  });

  const [showFilter, setShowFilter] = useState(false); // ✅ New State for mobile filter toggle

  useEffect(() => {
    const userProfile = async () => {
      setValues({ ...allValues, loader: true });
      const token = Cookies.get('myToken');
      const api = 'https://apis.ccbp.in/profile';
      const option = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const response = await fetch(api, option);
        const data = await response.json();
        if (response.ok) {
          setValues({ ...allValues, userProfile: data.profile_details, loader: false });
        } else {
          setValues({ ...allValues, loader: false });
        }
      } catch (error) {
        console.log(error);
      }
    };
    userProfile();
    // eslint-disable-next-line
  }, []);

  const onSetEmpType = (e) => {
    if (e.target.checked) {
      setMyValues({ ...allMyValues, empType: [...allMyValues.empType, e.target.value] });
    } else {
      setMyValues({
        ...allMyValues,
        empType: allMyValues.empType.filter((each) => each !== e.target.value),
      });
    }
  };

  const onChangeSalType = (e) => {
    setMyValues({ ...allMyValues, salType: e.target.value });
  };

  const UserProfile = () => (
    <div>
      {allValues.loader ? (
        <div className="userLoader">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="userProfile-card shadow">
          <img className="profile-img" src={allValues.userProfile.profile_image_url} alt="profile" />
          <h3>{allValues.userProfile.name}</h3>
          <p>{allValues.userProfile.short_bio}</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* ✅ Filter Toggle Button (Visible in Mobile) */}
      <div className="filter-toggle-btn">
        <button onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? 'Hide Filters ✖' : 'Show Filters ⚙️'}
        </button>
      </div>

      {/* ✅ Filter Container */}
      <div className={`filter-section ${showFilter ? 'show' : ''}`}>
        {UserProfile()}
        <div className="emp-cont shadow">
          <h3>Employment Type :</h3>
          <ul className="filter-list">
            {empArr.map((each) => (
              <li key={each.id}>
                <input
                  onChange={onSetEmpType}
                  value={each.id}
                  id={each.id}
                  type="checkbox"
                />
                <label className="ml-3" htmlFor={each.id}>
                  {each.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="salary-cont shadow">
          <h3>Salary Range :</h3>
          <ul className="filter-list">
            {salleryArr.map((each) => (
              <li key={each.id}>
                <input
                  onChange={onChangeSalType}
                  value={each.id}
                  name="salary"
                  id={each.id}
                  type="radio"
                />
                <label className="ml-3" htmlFor={each.id}>
                  {each.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterJobSection;
