"use client";

export default function Error({ error, reset }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">
                    Oops! Something went wrong.
                </h1>
                <p className="text-gray-700 mb-6">{error.message}</p>
                <button
                    onClick={() => reset()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        </>
    )
}