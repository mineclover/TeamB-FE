import React, { useState } from 'react';
import styled from 'styled-components';

const LocationModal = ({ locationList, setLocation, setAreaCode, onClose }) => {
  const [active, setActive] = useState('0');
  const toggleActive = (e) => {
    setActive(e.target.value);
  };

  return (
    <Container>
      <h2>지역 선택</h2>
      <ul>
        {Array.isArray(locationList)
          ? locationList.map((item, idx) => {
              return (
                <li
                  value={item.areacode}
                  className={item.areacode == active ? ' active' : ''}
                  onClick={(e) => {
                    toggleActive(e);
                    setLocation(item.addr);
                    setAreaCode(item.areacode);
                  }}
                  key={idx}
                >
                  {item.addr}
                </li>
              );
            })
          : null}
      </ul>
      <button
        onClick={() => {
          onClose();
        }}
      >
        선택완료
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 50vw;
  height: 60vh;
  background: #fff;
  border-radius: 10px;
  padding: 60px 50px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: SBAggroB;
    font-size: 1.5em;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 13px;
    li {
      cursor: pointer;
      width: calc(14.5% - 13px);
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      background-color: #eaebed;
      border-radius: 50px;
      font-size: 13px;
      font-weight: bold;
      &:hover {
        background-color: #2358c5;
        color: #fff;
      }
      &.active {
        background-color: #2358c5;
        color: #fff;
      }
    }
  }
  button {
    border: none;
    width: 20vw;
    height: 60px;
    font-size: 16px;
    background-color: #2358c5;
    color: #fff;
    border-radius: 10px;
    margin: auto auto 0;
    cursor: pointer;
  }
`;

export default LocationModal;
