// import PropTypes from 'prop-types';
import StyledFilter from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

// const Filter = ({ handleFilterChange, filter }) => {
//   return (
//     <StyledFilter>
//       Find contacts by name
//       <input
//         onChange={handleFilterChange}
//         type="text"
//         name="filter"
//         value={filter}
//       />
//     </StyledFilter>
//   );
// };

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const target = event.target.value;
    dispatch(setStatusFilter(target));
  };

  return (
    <StyledFilter>
      Find contacts by name
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        value={filter}
      />
    </StyledFilter>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string,
//   handleFilterChange: PropTypes.func.isRequired,
// };

export default Filter;
