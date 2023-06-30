
/**
 * 
 *@description Layout for all the Pages container comes under layout
 */
export default function Layout(props) {
  const { children } = props;
  //TODO : customMeta Fix; to dynamically accept it from heirarchy of components...
  return (
    <>
      <div className="lg:w-7/12 sm:mx-auto min-h-screen p-4">{children}</div>
    </>
  );
}
