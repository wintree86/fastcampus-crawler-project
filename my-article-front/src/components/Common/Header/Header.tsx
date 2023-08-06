"use client";
import RegisterKeywordModal from "@/components/RegisterKeywordModal";
import { useState } from "react";

function Header() {
  const [openKeywordModal, setOpenKeywordModal] = useState(false);

  return (
    <>
      <div className="fixed h-[60px] z-10 bg-black text-white w-[420px] flex items-center justify-between px-4">
        <div className="text-xl font-semibold">나만의 아티클</div>
        <button className="text-xl" onClick={() => setOpenKeywordModal(true)}>
          등록
        </button>
      </div>
      <RegisterKeywordModal
        isOpen={openKeywordModal}
        onOpenClose={() => setOpenKeywordModal(false)}
      />
    </>
  );
}

export default Header;
