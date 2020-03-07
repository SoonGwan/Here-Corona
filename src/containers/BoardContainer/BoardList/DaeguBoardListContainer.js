import React, { useState, useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Swal from "sweetalert2";
import DaeguBoard from 'components/Board/DaeguBoard';

const DaeguBoardListContainer = ({ store, history }) => {
  const [daeguList, setDaeguList] = useState([]);
  const [popularDaeguList, setPopularDaeguList] = useState([]);
  const { handleDaeguBoardList } = store.BoardStore;

  const requestDaeguList = useCallback(() => {
    handleDaeguBoardList()
        .then(response => {
            if (response.message === "글 목록 조회 성공.") {
                setDaeguList(daeguList.concat(response.data.posts));
            }
        })

        .catch (error => {
            console.log(error);
        })
  }, []);

  const requestTimeList = () => {
    handleDaeguBoardList('hit')
      .then(response => {
        if (response.message === "글 목록 조회 성공.") {
          setPopularDaeguList(response.data.posts);
        }
      })

      .catch (error => {
        console.log(error);
      })
  }

  useEffect(() => {
      requestDaeguList();
  }, []);

  return (
    <DaeguBoard daeguList ={daeguList} requestTimeList ={requestTimeList} popularDaeguList ={popularDaeguList} />
  );
};

export default inject("store")(observer(DaeguBoardListContainer));
