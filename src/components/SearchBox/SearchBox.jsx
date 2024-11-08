import s from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => (
  <div className={s.search}>
    <label>
      Пошук контактів за іменами
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  </div>
);

export default SearchBox;





