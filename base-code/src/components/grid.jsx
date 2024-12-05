// components/Grid.js
export default function Grid() {
  const gridItems = Array.from({ length: 24 });

  return (
    <div className="flex flex-col h-screen">
      {/* Grid without bottom spacing */}
      <div className="grid grid-cols-6 grid-rows-4 w-full h-[92%] bg-blue-365BAD pt-4 pl-4 pr-4 gap-0">
        {gridItems.map((_, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center bg-[#365BAD] text-white"
          >
            {/* Custom shorter border effect */}
            <>
              {/* Top border for cells 1 to 6 */}
              {index >= 0 && index <= 5 && (
                <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t-[2px] border-[#9AB2E5]"></div>
              )}
              {/* Bottom border for cells 19 to 24 */}
              {index >= 18 && index <= 23 && (
                <div className="absolute bottom-0 left-[5%] w-[90%] h-5 border-b-[2px]  border-[#9AB2E5]"></div>
              )}
              {/* Left border for cells 1, 7, 13, 19 */}
              {[0, 6, 12, 18].includes(index) && (
                <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l-[2px]  border-[#9AB2E5]"></div>
              )}
              {/* Right border for cells 6, 12, 18, 24 */}
              {[5, 11, 17, 23].includes(index) && (
                <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r-[2px]  border-[#9AB2E5]"></div>
              )}
            </>
            <>
              <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t border-[#9AB2E5]"></div>
              <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l border-[#9AB2E5]"></div>
              <div className="absolute bottom-0 left-[5%] w-[90%] h-1 border-b border-[#9AB2E5]"></div>
              <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r border-[#9AB2E5]"></div>
            </>
          </div>
        ))}
      </div>
      <div className="pl-6 pt-4">PORTFOLIO 2024</div>
    </div>
  );
}
