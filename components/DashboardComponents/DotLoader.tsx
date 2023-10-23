// DotLoader.tsx


interface DotLoaderProps {
  color?: string;
  text?: string;
}

const DotLoader: React.FC<DotLoaderProps> = ({ color, text = 'Please Wait' }) => {
  return (
    <div className={`loader text-${color ? [color] : 'black'}`}>
      <p className="text">
        <span>{text}</span>
        <span className="ellipsis">...</span>
      </p>
    </div>
  );
};

export default DotLoader;
