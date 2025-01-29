import React, { useEffect, useState } from 'react'
import Giscus from '@giscus/react'

// See discussion board:
// https://github.com/ismet55555/blog/discussions/categories/blog_comments

export default function Comments() {
  const [theme, setTheme] = useState('light')
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark')
          setTheme(isDark ? 'dark' : 'light')
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mt-6">
      <div className="border border-accentColor dark:border-gray-500">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full border-b border-accentColor py-3 text-center transition-colors hover:bg-green-100 dark:border-gray-500 dark:hover:bg-gray-800"
        >
          <span className="text-accentColor">Comment - Ask - Discuss</span>
        </button>

        <div
          className={`transform transition-all duration-300 ease-in-out ${
            isExpanded
              ? 'max-h-[2000px] opacity-100'
              : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className="px-6 pt-8">
            <div className="rounded-lg bg-lightModeBg dark:bg-darkModeBg">
              <Giscus
                repo="ismet55555/blog"
                repoId="R_kgDONhHSYg"
                category="blog_comments"
                categoryId="DIC_kwDONhHSYs4CmKYB"
                mapping="pathname"
                strict="1"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="top"
                theme={theme}
                lang="en"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
