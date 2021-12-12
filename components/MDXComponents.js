import Image from "next/image";

function RoundedImage(props) {
  return (
    <div className="w-full flex justify-center">
      <Image alt={props.alt} className="rounded-lg" {...props} />
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
};

export default MDXComponents;
