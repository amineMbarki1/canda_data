import Image from "next/image";
import LastNamesTable from "./LastNamesTable";
import EmailsTable from "./EmailsTable";
import FirstNamesTable from "./FirstNamesBoysTable";
import FirstNamesGirlsTable from "./FirstNamesGirlsTable";

export default function Home() {
  return (
    <main className="p-10 mx-auto">
      <div className="flex gap-5">
        <LastNamesTable />
        <EmailsTable />
        <FirstNamesTable />
        <FirstNamesGirlsTable />
      </div>
    </main>
  );
}
