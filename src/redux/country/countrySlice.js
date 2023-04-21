import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const initialState = {

  countryList: [],
  totalCountry: 0,
  isLoading: true,
  error: null,
};

export const getCountries = createAsyncThunk('countryList/getCountries', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Couldn't fetch data");
  }
});

const countrySlice = createSlice({
  name: 'country',
  initialState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getCountries.fulfilled, (state, action) => {
        const country = action.payload;
        const countryArray = [];
        let counter = 0;
        country.map((details) => {
          counter += details.population;
          countryArray.push({
            id: details.name.official,
            countryName: details.name.common,
            countryFlag: details.flags.png,
            population: details.population,
            capital: details.capital,
            continents: details.continents,
            coatofarm: details.coatOfArms,
            area: details.area,

          });
          return countryArray;
        });

        return {
          ...state,
          countryList: countryArray,
          totalCountry: counter,
          isLoading: false,
        };
      })
      .addCase(getCountries.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { totalpopulation } = countrySlice.actions;

export default countrySlice.reducer;
