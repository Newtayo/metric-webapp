const mockResponse = {
  data: [{ name: { common: 'Barbados', official: 'Barbados', nativeName: { eng: { official: 'Barbados', common: 'Barbados' } } } }, { capital: ['Bridgetown'] }, { flags: { png: 'https://flagcdn.com/w320/bb.png', svg: 'https://flagcdn.com/bb.svg', alt: 'The flag of Barbados is composed of three equal vertical bands of ultramarine, gold and ultramarine. The head of a black trident is centered in the gold band.' } }, { coatOfArms: { png: 'https://mainfacts.com/media/images/coats_of_arms/bb.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/bb.svg' } }, { population: 287371 }, { continents: ['North America'] }, { area: 430.0 }],

};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
