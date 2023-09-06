import buttonStyles from "../styles/Button.module.scss";

const Button = ({
  offset,
  onClick,
  text,
  active,
}: {
  offset: boolean;
  onClick:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  text: string;
  active: boolean;
}) => {
  return (
    <button
      className={`${offset ? buttonStyles.offset : ""} ${buttonStyles.button} ${
        !active ? buttonStyles.disabled : ""
      }`}
      onClick={onClick}
      disabled={!active}
    >
      {text}
    </button>
  );
};

export default Button;
