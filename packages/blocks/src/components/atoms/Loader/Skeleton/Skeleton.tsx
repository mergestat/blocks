export const Skeleton = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-200 h-10 w-10" />
      <div className="flex-1 space-y-4 py-1">
        <div className="h-2 bg-gray-200 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded" />
          <div className="h-2 bg-gray-200 rounded" />
          <div className="h-2 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}
