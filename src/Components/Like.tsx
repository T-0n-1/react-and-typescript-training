import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const Toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaHeart color="red" size={25} onClick={Toggle} />;
  return <FaRegHeart color="black" size={25} onClick={Toggle} />;
};

export default Like;
