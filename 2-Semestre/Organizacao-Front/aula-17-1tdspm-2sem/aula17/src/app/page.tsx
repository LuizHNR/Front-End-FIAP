import Image from "next/image";
import imgCapa from "@/img/black-friday-facebook-cover-banner-10.jpg";

export default function Home() {
  return (
    <div className="content-wrap">
      {/* <Image src="/img/black-friday-facebook-cover-banner-10.jpg" alt="Fones de ouvido"/> */}
      <Image src={imgCapa} alt="Fones de ouvido"/>
    </div>
  )
}
