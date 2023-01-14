import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchContries = async () => {
      try {
        const data = await getCountries();
        setCountry(data);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchContries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={country} />
      </Container>
    </Section>
  );
};
