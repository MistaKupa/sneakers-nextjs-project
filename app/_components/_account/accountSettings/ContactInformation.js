export default function ContactInformation() {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="w-full h-14 flex items-center justify-between px-5 bg-dark-200 border border-dark-300 rounded-md">
        <h3 className="text-dark-500 text-xl font-medium">
          Contact information
        </h3>
        <span className="font-medium text-sm text-newPrimary">Update</span>
      </div>

      <div className="w-full grid grid-rows-3 gap-1 px-5">
        <div className="grid grid-cols-[200px_200px_1fr]">
          <span className="text-dark-400">Email</span>
          <span>Feri</span>
          <span className="place-self-end text-newPrimary text-sm font-medium">
            Update
          </span>
        </div>
        <div className="grid grid-cols-[200px_200px_1fr]">
          <span className="text-dark-400">Phone Number</span>
          <span>helicopter</span>
          <span className="place-self-end text-newPrimary text-sm font-medium">
            Update
          </span>
        </div>
      </div>
    </div>
  );
}
