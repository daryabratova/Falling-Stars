import React, { useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import anime from "animejs";

import { getIsPaused } from "../../../redux/selectors";
import { actions } from "../../../redux/actions";

import * as Styles from "./Star.styles";

export type StarProps = {
  position: string;
  unmount: () => void;
};

export const Star: React.FC<StarProps> = (props) => {
  const { position, unmount } = props;

  const score = useMemo(() => {
    const sign = Math.random() < 0.5 ? -1 : 1;

    return sign * (1 + Math.floor(Math.random() * 5));
  }, []);

  const ref = useRef<HTMLDivElement>();
  const animation = useRef<anime.AnimeInstance>();

  const isPaused = useSelector(getIsPaused);

  const dispatch = useDispatch();

  useEffect(() => {
    ref.current.style.left = position;

    const delay = 1000 * (1 + Math.floor(Math.random() * 5));

    const complete = () => {
      dispatch(actions.addScore(score));
      unmount();
    };

    animation.current = anime({
      targets: ref.current,
      top: "100vh",
      delay,
      duration: 5000,
      easing: "linear",
      complete,
    });
  }, []);

  useEffect(() => {
    if (isPaused) {
      animation.current.pause();
    } else {
      animation.current.play();
    }
  }, [isPaused]);

  useEffect(() => {
    return () => {
      animation.current.pause();
    };
  });

  return <Styles.Star ref={ref}>{score}</Styles.Star>;
};
