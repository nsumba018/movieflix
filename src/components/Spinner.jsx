const Spinner = () => {
  return (
    <div role="status" className="flex justify-center py-8">
      <div className="size-10 animate-spin rounded-full border-4 border-gray-600 border-t-white" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner