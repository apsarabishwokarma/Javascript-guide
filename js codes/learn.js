export default function Icon() {
  return <></>;
}

export function ABC() {
  return <div>ABC</div>;
}

export const ABC1 = () => {
  return <div>ABC</div>;
};

export const ABC12 = () => <div>ABC</div>;


import  Icons, // for defult function we can write jpt 
{ABC} // for non-default we can't write other but {ABC as abc} from "@/components/ui/icon";

