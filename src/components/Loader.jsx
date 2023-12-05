import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    //for loading non 3d component to 3d components we use DREI
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
