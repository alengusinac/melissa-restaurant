import buttonStyles from "../styles/Button.module.scss";

const Button = ({
  onClick,
  text,
  active,
}: {
  onClick:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  text: string;
  active: boolean;
}) => {
  return (
    <button
      className={`${buttonStyles.button} ${
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
