import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ margin: '0 auto' }}>
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="tomato"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
