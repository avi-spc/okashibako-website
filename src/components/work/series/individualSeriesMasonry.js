import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import dataStore from "../../../store/dataStore"

const IndividualSeriesMasonry = ({ children }) => {

    const { seriesTitle } = useParams();
    
    const { series } = dataStore;
    const seriesEpisodes = series[seriesTitle].seriesEpisodes;
            
    const columns = 2;
    const gap = 22;

    const columnWrapper = {};
    const result = [];

    for (let i = 0; i < columns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < children.length; i++) {
        const columnIndex = i % columns;
        columnWrapper[`column${columnIndex}`].push(
          <div className="column-children">
            {children[i]}
          </div>
        );
    }

    for (let i = 0; i < columns; i++) {
        result.push(
          <div
            style={{
              marginLeft: `${i > 0 ? gap : 0}px`,
              flex: 1,
            }}>
            {columnWrapper[`column${i}`]}
          </div>
        );
      }

      return (
        <div style={{ display: 'flex' }}>
          {result}
         </div>
       );
}

export default IndividualSeriesMasonry;