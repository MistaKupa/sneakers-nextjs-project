"use client";

import { useState } from "react";
import ProfileInformationInput from "./ProfileInformationInput";

export default function ProfileInformationForm() {
  const [displayName, setDisplayName] = useState("Feri");
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("15.12.1985");

  const handleCancelForm = (e) => {
    e.preventDefault();
    setDisplayName("Feri");
    setGender("Male");
    setBirthDate();
  };

  return (
    <form className="w-72 flex flex-col items-center justify-center gap-3">
      {/*DisplayName Input*/}
      <div className="relative">
        <ProfileInformationInput
          inputName="Display name"
          type="text"
          placeHolder="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <span className="absolute top-0.5 left-3 text-[10px] text-dark-400 font-medium">
          Display Name
        </span>
      </div>

      {/*Gender Input*/}
      <div className="relative">
        <ProfileInformationInput
          inputName="Display name"
          inputType="select"
          type="text"
          placeHolder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <span className="absolute top-0.5 left-3 text-[10px]  text-dark-400 font-medium">
          Gender
        </span>
      </div>

      {/*BirthDate Input*/}
      <div className="relative">
        <ProfileInformationInput
          inputName="Birth Date"
          type="date"
          placeHolder="BirthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <span className="absolute top-0.5 left-3 text-[10px] text-dark-400 font-medium">
          Birth Date
        </span>
      </div>

      {/*Form Buttons */}
      <div className="flex items-center gap-3 w-full">
        <div className="w-full">
          <button
            onClick={handleCancelForm}
            className="w-full h-10 rounded-md bg-dark-300 text-dark-500"
          >
            Cancel
          </button>
        </div>
        <div className="w-full">
          <button className="w-full h-10 rounded-md text-newWhite bg-newPrimary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
