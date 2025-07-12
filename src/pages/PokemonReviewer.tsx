import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
  Pagination,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const PokemonReviewer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event: any) => {
      try {
        const json = JSON.parse(event.target.result);
        setPokemons(json);
        setPage(1); // Reset to first page on new upload
      } catch (error) {
        console.error('Invalid JSON file:', error);
      }
    };
    reader.readAsText(file);
  };

  // Pagination logic
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);
  const currentItems = pokemons.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (_: any, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Load Pokémon JSON
      </Typography>

      <input
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        id="upload-json"
        onChange={handleFileChange}
      />

      <label htmlFor="upload-json">
        <Button variant="contained" component="span">
          Upload JSON File
        </Button>
      </label>

      {pokemons.length > 0 && (
        <>
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            Pokémon List
          </Typography>

          <List>
            {currentItems.map((p, index) => (
              <ListItem key={index}>{p.name}</ListItem>
            ))}
          </List>

          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default PokemonReviewer;