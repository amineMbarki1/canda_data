import Table from "./Table";
import addresses from "./emailAddresses";

export default function EmailsTable() {
  return (
    <>
      <div className="w-full bg-slate-800 mb-[-10px] pl-5 py-3 rounded-t-lg pr-5">
        <label className="text-slate-50 mr-2 font-semibold block" htmlFor="#">
          Search
        </label>
        <input className="text-slate-50 border-transparent rounded p-3 focus:outline-none focus:border-sky-600 mb-[10px] bg-slate-700" />
      </div>
      <Table
        labels={["Adresse courriel"]}
        rows={addresses.map(({ address }) => ({ address }))}
      />
    </>
  );
}
