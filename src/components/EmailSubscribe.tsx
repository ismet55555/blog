import React, { useState, useEffect } from 'react'

export default function EmailSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    if (pressed) {
      const timer = setTimeout(() => setPressed(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [pressed])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPressed(true)
    setStatus('loading')

    try {
      await fetch(
        'https://buttondown.com/api/emails/embed-subscribe/ismet55555',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email })
        }
      )
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  // Use non-breaking spaces to pad "Subscribe" to match "Subscribing..." width
  const buttonLabel =
    status === 'loading'
      ? 'Subscribing...'
      : '\u00A0\u00A0Subscribe\u00A0\u00A0\u00A0'

  return (
    <div className="mt-6">
      <style>{`
        @keyframes soft-glow {
          0%, 100% {
            background-color: transparent;
            box-shadow: 0 0 0px transparent;
          }
          50% {
            background-color: rgba(96, 169, 56, 0.08);
            box-shadow: 0 0 8px rgba(96, 169, 56, 0.15);
          }
        }

        @keyframes hover-shake {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(1px, -1px); }
          20% { transform: translate(-1px, 1px); }
          30% { transform: translate(1px, 0px); }
          40% { transform: translate(-1px, -1px); }
          50% { transform: translate(0px, 1px); }
          60% { transform: translate(1px, -1px); }
          70% { transform: translate(-1px, 1px); }
          80% { transform: translate(1px, 0px); }
          90% { transform: translate(-1px, -1px); }
        }

        @keyframes press-burst {
          0% {
            transform: translate(0, 0) scale(1);
            box-shadow: 0 0 0px rgba(96, 169, 56, 0.3);
            background-color: rgba(96, 169, 56, 0.25);
          }
          15% {
            transform: translate(2px, -3px) scale(1.06);
            box-shadow: 0 0 18px rgba(96, 169, 56, 0.6);
            background-color: rgba(96, 169, 56, 0.35);
          }
          30% {
            transform: translate(-3px, 2px) scale(1.04);
            box-shadow: 0 0 14px rgba(96, 169, 56, 0.5);
          }
          45% {
            transform: translate(2px, -1px) scale(1.02);
            box-shadow: 0 0 10px rgba(96, 169, 56, 0.35);
          }
          60% {
            transform: translate(-1px, 1px) scale(1.01);
            box-shadow: 0 0 6px rgba(96, 169, 56, 0.2);
          }
          80% {
            transform: translate(0, 0) scale(1);
            box-shadow: 0 0 2px rgba(96, 169, 56, 0.1);
            background-color: rgba(96, 169, 56, 0.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
            box-shadow: 0 0 0px transparent;
            background-color: transparent;
          }
        }

        @keyframes oneup-bounce {
          0% {
            transform: translateY(0);
            box-shadow: 0 0 0px transparent;
            background-color: transparent;
            border-color: currentColor;
          }
          8% {
            transform: translateY(-18px);
            box-shadow: 0 0 25px rgba(100, 255, 50, 0.7), 0 8px 30px rgba(100, 255, 50, 0.3);
            background-color: rgba(100, 255, 50, 0.2);
            border-color: rgba(100, 255, 50, 0.9);
          }
          18% {
            transform: translateY(0);
            box-shadow: 0 0 18px rgba(100, 255, 50, 0.5);
            background-color: rgba(100, 255, 50, 0.15);
          }
          26% {
            transform: translateY(-10px);
            box-shadow: 0 0 20px rgba(100, 255, 50, 0.5), 0 5px 20px rgba(100, 255, 50, 0.2);
            background-color: rgba(100, 255, 50, 0.12);
            border-color: rgba(100, 255, 50, 0.7);
          }
          36% {
            transform: translateY(0);
            box-shadow: 0 0 12px rgba(96, 169, 56, 0.4);
            background-color: rgba(100, 255, 50, 0.08);
          }
          44% {
            transform: translateY(-5px);
            box-shadow: 0 0 14px rgba(96, 169, 56, 0.35), 0 3px 12px rgba(96, 169, 56, 0.15);
            background-color: rgba(96, 169, 56, 0.06);
            border-color: rgba(96, 169, 56, 0.6);
          }
          52% {
            transform: translateY(0);
            box-shadow: 0 0 8px rgba(96, 169, 56, 0.2);
            background-color: rgba(96, 169, 56, 0.04);
          }
          58% {
            transform: translateY(-2px);
            box-shadow: 0 0 6px rgba(96, 169, 56, 0.15);
          }
          65% {
            transform: translateY(0);
            box-shadow: 0 0 3px rgba(96, 169, 56, 0.1);
            background-color: rgba(96, 169, 56, 0.02);
          }
          100% {
            transform: translateY(0);
            box-shadow: 0 0 0px transparent;
            background-color: transparent;
            border-color: currentColor;
          }
        }

        .subscribe-btn {
          animation: soft-glow 4s ease-in-out infinite;
        }

        .subscribe-btn:hover {
          animation: hover-shake 0.3s linear infinite;
          background-color: rgba(96, 169, 56, 0.1);
          box-shadow: 0 0 6px rgba(96, 169, 56, 0.2);
        }

        .subscribe-btn.pressed {
          animation: press-burst 0.6s ease-out forwards;
        }

        .subscribe-container.pressed {
          animation: oneup-bounce 2s ease-out forwards;
        }

        @keyframes screen-flash {
          0% {
            background-color: rgba(100, 255, 50, 0.18);
          }
          20% {
            background-color: rgba(100, 255, 50, 0.08);
          }
          50% {
            background-color: rgba(100, 255, 50, 0.04);
          }
          100% {
            background-color: transparent;
          }
        }

        .screen-flash-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          animation: screen-flash 1s ease-out forwards;
        }
      `}</style>

      {pressed && <div className="screen-flash-overlay" />}

      <div
        className={`subscribe-container border border-accentColor dark:border-gray-500${pressed ? ' pressed' : ''}`}
      >
        <div className="w-full border-b border-accentColor py-3 text-center dark:border-gray-500">
          <span className="text-accentColor">
            Subscribe - Get New Posts by Email
          </span>
        </div>

        <div className="px-6 py-8">
          {status === 'success' ? (
            <p className="text-center text-accentColor">
              You're subscribed! Check your inbox to confirm.
            </p>
          ) : (
            <>
              <p className="mb-4 text-sm text-gray-500">
                No spam. Unsubscribe any time.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex gap-3 w500:flex-col"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === 'loading'}
                  className="flex-1 border border-gray-400 bg-transparent px-3 py-2 text-sm text-lightModeText placeholder-gray-500 focus:border-accentColor focus:outline-none dark:text-darkModeText dark:placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`subscribe-btn border border-accentColor px-4 py-2 text-sm text-accentColor transition-colors disabled:opacity-50${pressed ? ' pressed' : ''}`}
                >
                  {buttonLabel}
                </button>
              </form>
              {status === 'error' && (
                <p className="mt-2 text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
