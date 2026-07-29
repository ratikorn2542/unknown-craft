export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-[#2d2d44] border-t-[#e94560] rounded-full animate-spin" />
        <p className="mt-4 text-[#9ca3af]">Loading...</p>
      </div>
    </div>
  );
}
