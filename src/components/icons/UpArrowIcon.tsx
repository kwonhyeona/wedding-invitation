interface Props {
  width?: string;
  height?: string;
  color?: `#${string}`;
}

const UpArrowIcon = ({
  width = '24px',
  height = '24px',
  color = '#000000',
}: Props) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" />
    </svg>
  );
};

export default UpArrowIcon;
