// NotFound component to display a 404 error page
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#365BAD] text-[#E1E3FC]">
      {/* 404 error message */}
      <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
    </div>
  );
}
