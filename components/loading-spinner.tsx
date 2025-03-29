export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-32">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-[#9B2B3A] border-t-transparent"></div>
      </div>
    </div>
  )
}

