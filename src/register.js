import Iframe from "react-iframe";

export default function Register() {
    return (
        <div className="container mb-2">
      <Iframe
        url="https://pggame.autoplay.cloud/register?prefix=V0FU"
        width="100%"
        height="800"
        id="myId"
        className="text-center"
        position="relative"
        frameBorder="0"
        display="block"
      />
    </div>
    )
}
