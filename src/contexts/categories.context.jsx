import { createContext, useState, useEffect } from 'react';

// import { addColectionAndDocuments } from '../utils/firebase/firebase.utils.js';

// import SHOP_DATA from '../shop-data.js';

 import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
	// useEffect(()=>{
	// 	addColectionAndDocuments('categories', SHOP_DATA)
	// },[])

	useEffect(()=>{
		const getCategoriesMap = async ()=>{
			const categoryMap = await getCategoriesAndDocuments();

			setcategoriesMap(categoryMap);
		}
		getCategoriesMap()
	},[])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
