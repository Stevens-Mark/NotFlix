
export const  randomSelect = ( data ) => {
  const idx = Math.floor((Math.random() * data.length) + 0);
  return data[ idx ];
}