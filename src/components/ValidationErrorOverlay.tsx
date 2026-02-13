import { AlertTriangle } from "lucide-react";

interface Props {
  errors: string[];
}

const ValidationErrorOverlay = ({ errors }: Props) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-amber-500" />
          <h1 className="text-2xl font-bold text-gray-900">
            Site Configuration Error
          </h1>
        </div>
        <p className="mb-4 text-gray-600">
          The <code className="rounded bg-gray-100 px-2 py-0.5 text-sm font-mono">siteData.json</code> file has missing or invalid fields.
          Please fix the following issues:
        </p>
        <ul className="mb-6 max-h-80 space-y-2 overflow-y-auto rounded-lg bg-red-50 p-4">
          {errors.map((error, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-800">
              <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              {error}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">
          Refer to <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">EDITING_GUIDE.md</code> for field documentation.
        </p>
      </div>
    </div>
  );
};

export default ValidationErrorOverlay;
