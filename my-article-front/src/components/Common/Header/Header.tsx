function Header() {
  return (
    <div className="fixed h-[60px] z-10 bg-black text-white w-[420px] flex items-center justify-between px-4">
      <div className="text-xl font-semibold">나만의 아티클</div>
      <button className="text-xl">등록</button>
    </div>
  );
}

export default Header;
