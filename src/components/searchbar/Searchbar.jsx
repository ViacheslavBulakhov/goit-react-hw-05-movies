import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchFormIcon,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <SearchbarWrap>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <SearchFormIcon />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
          onChange={e =>
            e.target.value.trim() !== ''
              ? setSearchParams({ query: e.target.value.trim() })
              : setSearchParams({})
          }
          value={searchParams.get('query') ?? ''}
        />
      </SearchForm>
    </SearchbarWrap>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
