import classNames from "classnames";
import { ApolloError } from "@apollo/client";

import styles from "./Loader.module.css";

type Props = {
  loading: boolean;
  error: ApolloError | undefined;
};

const Loader = ({ loading, error }: Props) => {

    console.log('err loader::', error)
  const listClasses = classNames({
    [styles.loader]: loading,
    [styles.error]: error,
  });

  return <div title={error?.message} className={listClasses}></div>;
};

export default Loader;
