import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  List,
  ListItem,
  Typography,
  Pagination,
} from '@mui/material';
import { legendaryList } from '../constants/rarities/all_rarities';

const PokemonReviewer: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [showLegendary, setShowLegendary] = useState(false);
  const [showMythical, setShowMythical] = useState(false);

  const itemsPerPage = 10;

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event: any) => {
      try {
        const json = JSON.parse(event.target.result);
        setPokemons(json);
        setPage(1);
      } catch (error) {
        console.error('Invalid JSON file:', error);
      }
    };
    reader.readAsText(file);
  };

  // 🔍 Apply filters
  const filteredPokemons = pokemons.filter((p) => {
    // const isMythical = p.isMythical === true;

    if (showLegendary || showMythical) {
      if (showLegendary) { if (legendaryList.includes(p.id)) return true; }

      return false
    }

    // if (!showMythical && isMythical) return false;
    return true;
  });

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  const currentItems = filteredPokemons.slice(
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
          <Box mt={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showLegendary}
                  onChange={(e) => setShowLegendary(e.target.checked)}
                />
              }
              label="Show Legendaries"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showMythical}
                  onChange={(e) => setShowMythical(e.target.checked)}
                />
              }
              label="Show Mythicals"
            />
          </Box>

          <Typography variant="h6" sx={{ marginTop: 3 }}>
            Pokémon List ({filteredPokemons.length})
          </Typography>

          <List>
            {currentItems.map((p, index) => (
              <ListItem key={p.id || index}>
                {p.name} {p.isLegendary && '🌟'} {p.isMythical && '✨'}
              </ListItem>
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