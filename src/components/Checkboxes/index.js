import { useState } from 'react';
import { handleToggle } from '../util';

const Checkboxes = ({ list, handleFilters }) => {
  const [checkedArray, setCheckedArray] = useState([]);

  const onChangeHandler = (checkboxId) => {
      debugger
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    // Update this checked information into Parent Component
    handleFilters(newState.map((id) => list[id].ActivityTypeName));
  };

  return list.map((item, index) => {
    return (
      <div key={index}>
        <input
          type="checkbox"
          id={item.ActivityTypeId}
          checked={checkedArray.indexOf(index) !== -1}
          onChange={() => onChangeHandler(index)}
        />
        <label htmlFor={item.ActivityTypeId}>{item.ActivityTypeName}</label>
      </div>
    );
  });
};

export default Checkboxes;
