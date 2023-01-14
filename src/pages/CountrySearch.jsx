import { useState, useEffect } from 'react';
import {fetchByRegion} from '../service/country-service'
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const handleSubmit = (e) => {
    setQuery(e);
  } 
  useEffect(() => {
    if (query === '') {
      return
    }
    setLoading(true);
    const getRegion = async () => {
      try {
        const response = await fetchByRegion(query);
        setCountries(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getRegion();
  }, [query]);
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {loading && <Loader />}
        {error && <Heading>Something wrong</Heading>}
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
