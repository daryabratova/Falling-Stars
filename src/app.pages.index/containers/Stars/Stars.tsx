import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getIsRunning, getIsPaused } from "../../../redux/selectors";

import { Star } from "../Star";

import * as Styles from "./Stars.styles";

export const Stars: React.FC = () => {
  const count = 3;

  const positions = useMemo(
    () =>
      Array(count)
        .fill(null)
        .map((_, index) => {
          return `${100 * (index / count + 1 / (count * 2))}%`;
        }),
    []
  );

  const [stars, setStars] = useState(() => {
    return Array(count).fill(null);
  });

  const isRunning = useSelector(getIsRunning);
  const isPaused = useSelector(getIsPaused);

  const renderStar: (index: number) => JSX.Element = (index) => {
    const position = positions[index];

    const unmount = () => {
      setStars((stars) => {
        return stars.map((star, i) => {
          if (i === index) {
            return null;
          }

          return star;
        });
      });
    };

    return <Star key={index} position={position} unmount={unmount} />;
  };

  useEffect(() => {
    if (!isRunning && !isPaused) {
      setStars(Array(count).fill(null));
    }
  }, [isRunning, isPaused]);

  useEffect(() => {
    if (isRunning) {
      if (stars.some((star) => star === null)) {
        setStars((stars) => {
          return stars.map((star, index) => {
            if (star === null) {
              return renderStar(index);
            }

            return star;
          });
        });
      }
    }
  }, [stars, isRunning]);

  return <Styles.Layout>{stars}</Styles.Layout>;
};
