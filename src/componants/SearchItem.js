import React, { useContext } from 'react';
import classes from './SearchItem.module.css';
import { Row, Col } from 'antd';
import { apiCtx } from './Search';
const SearchItem = (props) => {
  let finalStr;
  const fetchdata = useContext(apiCtx);
  props.synonyms.sort();

  return (
    <>
      <div>
        <Row>
          <Col span={20} offset={2}>
            <section className={classes.summary}>
              <h2>Word As a "{props.partOfSpeech}"</h2>
              <p>
                <b>Defination :- </b> :-
                {props.defination}
              </p>
              <p>
                <b>Example:- </b>
                {props.example === undefined
                  ? 'No Example Available'
                  : props.example}
              </p>
              <b>Synonyms:-</b>
              {props.synonyms.length > 0 && (
                <p className={classes.list}>
                  {props.synonyms.map((sys) => (
                    <button
                      key={sys}
                      className={classes.sysItems}
                      onClick={(event) => {
                        fetchdata(event.target.textContent);
                      }}
                    >
                      {(finalStr = sys.charAt(0).toUpperCase() + sys.slice(1))}
                    </button>
                  ))}
                </p>
              )}
              {!props.synonyms.length > 0 && (
                <p>There are no Synonyms for this word in API</p>
              )}
            </section>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchItem;
