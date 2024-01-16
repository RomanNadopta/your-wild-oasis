import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searhParams, setSearhParams] = useSearchParams();
  const sortBy = searhParams.get('sortBy') || '';

  function handleChange(e) {
    searhParams.set('sortBy', e.target.value);
    setSearhParams(searhParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type='white'
      onChange={handleChange}
    />
  );
}

export default SortBy;
