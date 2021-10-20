import React from "react";
import { useForm } from "../hooks/useForm";
import styles from "../styles/Home.module.css";

interface Props {}

export const Bio: React.FC<Props> = () => {
  const initialState = {
    bio: "",
  } as {
    bio: string;
  };

  const {
    onChange,
  }: {
    onChange: any;
  } = useForm(initialState);
  const boxSize = 5;
  return (
    <form>
      <div>
        <textarea 
          className={styles.textarea}
          name="Bio"
          placeholder="Bio"
          rows = {boxSize}
          cols = {boxSize * 4}
          onChange={onChange}
        />
      </div>
    </form>
  );
};
