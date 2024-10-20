import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    landscape?: boolean 
}

function MobileMockup({children, landscape}: Props) {
  return (
    <div className={`mockup-phone transform ${landscape ? 'rotate-[270deg]' : ''}`}>
      <div className="camera"></div>
      <div className="bg-black display">
        <div className="artboard artboard-demo phone-1">{children}</div>
      </div>
    </div>
  );
}

export default MobileMockup;
