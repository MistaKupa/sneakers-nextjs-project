import PictureInput from "./PictureInput";

export default function ProfilePictureSettings() {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="w-full h-14 flex items-center px-5 bg-dark-200 border border-dark-300 rounded-md">
        <h3 className="text-dark-500 text-xl font-medium">Profile picture</h3>
      </div>

      <div className="w-full px-5 ">
        <div className="flex items-center gap-5">
          <span className="h-20 w-20 flex items-center justify-center bg-newPrimary rounded-full text-newWhite text-3xl font-medium">
            GG
          </span>
          <div className="h-14 flex flex-col">
            <span className="text-dark-400">Update profile picture</span>
            <div>
              <PictureInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
