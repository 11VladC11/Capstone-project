export const selectCategoriesMap = (state) => {
	console.log('first', state.categories.categories)

  const categoriesMap = state.categories.categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;
};
