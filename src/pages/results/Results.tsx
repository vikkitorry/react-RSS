// import { classNames } from '../../utils/libs/classNames/classNames';
// // import cls from './mainPage.module.scss';
// import React, { useState, useEffect } from 'react';
// import Service from '../../app/providers/services/service';
// import { GridTable } from '../../components/widgets/GridTable/GridTable';
// import { AllCharacterSchema } from '../../app/providers/services/types/serviceTypes';
// // import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';
// import { NoResultsPage } from '../noResults/NoResultsPage';
// import { Loader } from '../../components/widgets/Loader/Loader';

// export const Results = () => {
//   // const [inputValue, setInputValue] = useState<string | undefined>(
//   //   localStorage.getItem(SEARCH_LOCALSTORAGE_KEY) || undefined
//   // );
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [data, setData] = useState<AllCharacterSchema | null>(null);

//   // const onBlur = (value: string) => {
//   //   setInputValue(value);
//   // };

//   const onSubmit = async () => {
//     setIsLoading(true);
//     await Service.getCharacter(inputValue)
//       .then((data) => setData(data))
//       .catch(() => setData(null))
//       .finally(() => setIsLoading(false));
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     inputValue
//       ? onSubmit()
//       : Service.getAllCharacters(inputValue)
//           .then((data) => setData(data))
//           .catch(() => setData(null))
//           .finally(() => setIsLoading(false));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className={classNames(cls.Results, {}, [])}>
//       {isLoading ? (
//         <Loader />
//       ) : data?.results ? (
//         <GridTable elements={data.results} pages={data?.info.pages} />
//       ) : (
//         <NoResultsPage />
//       )}
//     </div>
//   );
// };

// export default Results;
