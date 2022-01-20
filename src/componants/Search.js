import React, { createContext } from 'react';
import { Input, Button, notification } from 'antd';
// import 'antd/dist/antd.css';

import { useRef, useState } from 'react';
import classes from './Search.module.css';
import SearchList from './SearchList';

const BTN_SIZE = 'large';
const apiCtx = createContext();
const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchedData, setIsFetchedData] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const enteredSearchInput = useRef();
  // const [changedWord, setChangedWord] = useState('');

  const openNotificationWithIcon = (type, word) => {
    if (type === 'success') {
      notification[type]({
        message: 'Gotcha...',
        description: `Congratulations 🎉🎉. Here everything you are looking about word "${word}".🙂🙂`,
      });
    } else if (type === 'error') {
      notification[type]({
        message: 'Error!! Not Found😔😔😔',
        description: `Word "${word}", Which You are trying to Search is not Appropriate according to API `,
      });
    } else if (type === 'warning') {
      notification[type]({
        message: 'Network Error!!',
        description: `Please Check Your Internet Connection.`,
      });
    }
  };

  const fetchApi = async (word) => {
    // console.log(`word ${word}`);
    // console.log(`change Word ${changedWord}`);
    enteredSearchInput.current.value = word;
    setIsLoading(true);
    // console.log('in api ' + word);
    word = word.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '');
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        openNotificationWithIcon('error', word);
        setIsError(true);
      } else {
        const data = await response.json();
        setResponseData(data[0].meanings);
        openNotificationWithIcon('success', word);
        setIsFetchedData(true);
        setIsError(false);
      }
    } catch (error) {
      openNotificationWithIcon('warning', word);
      // setIsLoading(false);
    }
    // console.log(enteredSearchInput.current.value);

    // setChangedWord(word);
    setIsLoading(false);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const enteredValidSearch = enteredSearchInput.current.value.trim();
    // const enteredValidSearch = changedWord.trim();
    // console.log(`valid search ${enteredValidSearch}`);
    // console.log(enteredValidSearch);
    if (!enteredValidSearch) {
      return;
    }

    fetchApi(enteredValidSearch);
    // console.log(`after api ${enteredValidSearch}`);
  };

  return (
    <>
      <div>
        {/* <form onSubmit={searchHandler}> */}
        <input
          className={classes.input}
          ref={enteredSearchInput}
          type='text'
          placeholder='Search a Word'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              searchHandler(event);
            }
          }}
        />

        <br />

        {!isLoading && (
          <Button
            shape='round'
            size={BTN_SIZE}
            type='primary'
            onClick={searchHandler}
          >
            Search
          </Button>
        )}
        {isLoading && (
          <Button shape='round' size={BTN_SIZE} type='primary' loading>
            Loading
          </Button>
        )}

        {!isLoading && isFetchedData && !isError && (
          <ul>
            <apiCtx.Provider
              value={(word) => {
                fetchApi(word);
              }}
            >
              <SearchList data={responseData} />
            </apiCtx.Provider>
          </ul>
        )}
        {/* </form> */}
      </div>
    </>
  );
};
export { apiCtx };

export default Search;
