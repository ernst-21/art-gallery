export const titleWrangler = (category) => {
  let title;
  if (category === 'all') {
    title = category.charAt(0).toUpperCase() + category.slice(1) + ' ' + 'Categories';
  } else {
    title = category.charAt(0).toUpperCase() + category.slice(1);
  }
  return title;
};
