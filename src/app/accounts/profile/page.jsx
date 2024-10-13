/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { logout } from "../../../actions/auth";
import Navside from "../../components/navside";
import { update } from "../../../actions/profile";
import { getUser } from "../../../actions/profile";
import { useFormState, useFormStatus } from "react-dom";
import Setting from "../../components/setting";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [state, action] = useFormState(update, undefined);
  const [profile, setProfile] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar yang diunggah

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const user = await getUser();
    setProfile(user);
    // console.log(profile);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file)); // Menampilkan gambar yang dipilih
  };

  return (
    <div className="w-full flex bg-gradient-to-br from-[#1A0733] to-[#5E27D1] h-screen overflow-hidden">
      <div className="my-14 container flex justify-between gap-10 flex-row mx-auto">
        {/* Sidebar */}
        <aside className="max-w-max">
          <Navside className="text-white"></Navside>
        </aside>

        {/* Main Content */}
        <div className="container bg-[#10071d] bg-[url('/public/image/stars.png')] bg-cover rounded-xl flex flex-col items-center py-8 px-6 shadow-xl space-y-2">
          <form action={action} className="w-full max-w-md space-y-6">
            {/* Profile Image */}
            <div className="relative w-[90px] h-[90px] mx-auto mb-6">
              <img
                src={profile?.picture ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cilukba/${profile?.picture}` : selectedImage || "/image/profile-picture.png"} // Menampilkan gambar yang diunggah atau default
                alt="Profile Picture"
                className="rounded-full shadow-lg border-4 border-[#5E27D1] object-cover w-[90px] h-[90px]" // Ukuran tetap untuk gambar
              />
              {/* Button Upload */}
              <label htmlFor="picture" className="absolute bottom-0 right-0 bg-[#5E27D1] text-white p-2 rounded-full cursor-pointer">
                <input
                  type="file"
                  id="picture"
                  className="hidden"
                  accept="image/*"
                  name="picture"
                  onChange={handleImageChange} // Mengubah gambar saat diunggah
                />
                Edit
              </label>
            </div>

            {/* Form */}
            <div className="grid">
              <label htmlFor="username" className="mb-2 text-white font-semibold">
                Username
              </label>
              <input
                className="bg-[#252A34] p-3 text-white rounded-lg border border-[#5E27D1] focus:ring-2 focus:ring-[#8C57F1] transition-all"
                id="username"
                type="text"
                name="username"
                placeholder={`${profile.username}` ?? "Enter username"}
              />
            </div>
            {state?.errors?.username && <p className="text-red-500">{state.errors.username}</p>}

            <div className="grid">
              <label htmlFor="name" className="mb-2 text-white font-semibold">
                Name
              </label>
              <input className="bg-[#252A34] p-3 text-white rounded-lg border border-[#5E27D1] focus:ring-2 focus:ring-[#8C57F1] transition-all" id="name" type="text" name="name" placeholder={`${profile.name}` ?? "Enter your name"} />
            </div>
            {state?.errors?.name && <p className="text-red-500">{state.errors.name}</p>}

            <div className="grid">
              <label htmlFor="bio" className="mb-2 text-white font-semibold">
                Bio
              </label>
              <textarea
                className="bg-[#252A34] p-3 text-white rounded-lg border border-[#5E27D1] focus:ring-2 focus:ring-[#8C57F1] transition-all"
                id="bio"
                type="text"
                name="bio"
                placeholder={profile.bio ? `${profile.bio}` : "Enter your bio"}
              />
            </div>
            {state?.errors?.bio && <p className="text-red-500">{state.errors.bio}</p>}

            <div className="grid">
              <label htmlFor="email" className="mb-2 text-white font-semibold">
                Email
              </label>
              <input className="bg-[#252A34] p-3 text-white rounded-lg border border-[#5E27D1] focus:ring-2 focus:ring-[#8C57F1] transition-all" id="email" type="email" name="email" placeholder={`${profile.email}` ?? "Enter email"} />
            </div>
            {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}

            <div className="grid">
              <label htmlFor="password" className="mb-2 text-white font-semibold">
                Password
              </label>
              <input className="bg-[#252A34] p-3 text-white rounded-lg border border-[#5E27D1] focus:ring-2 focus:ring-[#8C57F1] transition-all" id="password" type="password" name="password" placeholder={"Enter new password"} />
            </div>
            {state?.errors?.password && <p className="text-red-500">{state.errors.password}</p>}

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        className="w-32 h-10 mt-8 relative cursor-pointer left-16 py-2 px-3 rounded-full bg-gradient-to-b from-[#2b1551] to-[#6b3db1] shadow-[0px_0px_12px_#8c45ff] overflow-hidden z-10 mx-auto"
      >
        <div className="absolute inset-0">
          <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
        </div>
        <div className="text-center text-white font-semibold z-10 w-full h-7">Save</div>
      </motion.div>
    </button>
  );
}
