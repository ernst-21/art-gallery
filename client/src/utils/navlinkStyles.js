export const isActive = (history, path) => {
  if (history.location.pathname === path)
    return { fontSize: '16px', color: '#d94506', fontWeight: 500 };
  else
    return {
      backgroundColor: 'transparent',
      fontSize: '16px',
      color: '#0B0B09'
    };
};
