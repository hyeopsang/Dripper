import { Camera } from 'lucide-react';

export const MediaAddButton = () => {
  return (
    <button className="bg-sand flex-center aspect-square w-7.5 rounded-full shadow">
      <Camera fill="black" stroke="#FCFAF7" className="w-5" />
    </button>
  );
};
