interface Props {
  width?: string;
  height?: string;
  color?: `#${string}`;
}

const LeftArrowIcon = ({
  width = '24px',
  height = '24px',
  color = '#000000',
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
