export default function Logo() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="border-t-2 w-2 h-2 border-black rotate-45 mr-0.5 relative top-1.5"></div>
        <div className="border-b-2 w-2 h-2 border-black rotate-90 ml-2 relative top-0.5"></div>
        <div className="border-s-2 w-2 h-2 border-black rotate-45 ml-0.5 relative top-1.5"></div>
      </div>
      <div className="bg-white h-14 w-14 rounded-full flex flex-col items-center justify-center border-black border-2">
        <div className="h-6 w-6 rounded-full bg-blue-500 flex justify-center items-center">
          <div className="h-4 w-4 rounded-full bg-gray-800"></div>
        </div>
      </div>
    </>
  );
}
