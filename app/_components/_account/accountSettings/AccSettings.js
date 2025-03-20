import { SessionProvider } from "next-auth/react";
import ContactInformation from "./ContactInformation";
import PasswordSettings from "./passwordSettings/PasswordSettings";
import ProfileInformation from "./profileInformationSettings/ProfileInformation";
import ProfilePicture from "./profilePictureSettings/ProfilePictureSettings";

export default function AccSettings() {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-dark-500 text-3xl font-semibold">Account Settings</h3>
      <div className="flex flex-col justify-center gap-28">
        <ProfilePicture />
        <PasswordSettings />
        <ProfileInformation />
        <ContactInformation />
      </div>
    </div>
  );
}
