interface CompletionScreenProps {
  isCopied: boolean;
  onCopy: () => void;
}

export const CompletionScreen = ({
  isCopied,
  onCopy,
}: CompletionScreenProps) => {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        ¡Predicciones Completadas!
      </h3>
      <p className="text-gray-600 mb-6">
        Has seleccionado tus ganadores para todas las categorías.
      </p>
      <button
        onClick={onCopy}
        className={`${
          isCopied
            ? "bg-green-500 text-white"
            : "bg-linear-to-r from-amber-300 to-yellow-600 text-amber-900 hover:from-amber-400 hover:to-yellow-700"
        } font-bold py-3 px-6 rounded-lg transition-all duration-200 w-full`}
      >
        {isCopied ? "✓ Copiado al portapapeles" : "Copiar predicciones"}
      </button>
    </div>
  );
};
