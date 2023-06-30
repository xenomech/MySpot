import Image from "next/image";

function RoundedImage(props) {
  return (
    <div className={props.tails}>
      <Image alt={props.alt} className="rounded-xl" {...props} />
    </div>
  );
}

function SandboxFrame(props) {
  return (
    <div className="w-full flex justify-center">
      <iframe
        {...props}
        className="w-full h-10/12 border-0 rounded-lg"
        title="Optimistic UI example"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      ></iframe>
    </div>
  );
}
function Flex({ style, children }) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center">
      {children}
    </div>
  );
}

function Grid({ style, children }) {
  return <div className='grid p-4 2xl:grid-cols-2 gap-4 justify-center items-center'>{children}</div>;
}
const MDXComponents = {
  Image: RoundedImage,
  SandboxFrame,
  Flex,
  Grid,
};

export default MDXComponents;
