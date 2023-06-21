interface Props {
  text: string;
  style?: string;
}

const SubHeading = ({ text, style }: Props) => {
  return (
    <p
      className={`mt-2 mx-auto max-w-[580px] text-center px-3 md:px-0 ${style}`}
    >
      {text}
    </p>
  );
};

export default SubHeading;
