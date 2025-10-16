type LoaderProps = {
  fadeOut?: boolean;
};

export default function Loader({ fadeOut = false }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-950  transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 border-4 border-purple-800 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg">
          Carregando
          <span className="text-purple-800"> ...</span>
        </p>
      </div>
    </div>
  );
}