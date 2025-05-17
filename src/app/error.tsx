'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[--bg-theme-color2] text-[--text-dark-color] px-4">
            <div className="bg-[--bg-primary-color] p-8 rounded-[--standard-border-radius] shadow-md max-w-md text-center border border-[--bg-theme-color]">
                <h2 className="text-2xl font-bold mb-4 text-[--text-theme-color]" style={{ color: 'var(--text-theme-color)' }}>Oops! Something went wrong</h2>
                <p className="text-[--text-primary-color] mb-6">
                    We're sorry for the inconvenience. Please try again or refresh the page.
                </p>
                <button
                    onClick={() => reset()}
                    style={{ backgroundColor: 'var(--bg-theme-dark)', color: 'var(--text-white-color)', fontWeight: 'bold' }}
                    className="px-6 py-2 rounded-[--standard-border-radius2] bg-[--bg-theme-dark] text-[--text-white-color] border-2 border-[--text-theme-color] transition-all"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}