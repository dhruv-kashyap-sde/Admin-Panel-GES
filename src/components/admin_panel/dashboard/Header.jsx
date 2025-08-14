import { Badge } from "@/components/ui/badge";

export default function Header({ title, subtitle }) {
  return (
    <div className="px-2 py-2 flex flex-col justify-start md:flex-row md:justify-between items-center ">
      <div>
        <h1 className="text-gradient leading-normal text-3xl font-bold">{title}</h1>
        <p className=" mt-1">{subtitle}</p>
      </div>
      <Badge variant="outline" className="h-6 p-5 rounded-full text-neutral-700">CBSE Board • Last Updated: 12/08/2025, 15:46:57</Badge>
    </div>
  )
}
