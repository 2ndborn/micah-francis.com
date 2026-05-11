import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import InfiniteScroll from '../InfiniteScroll'
import { renderWithRouter } from './test-utils'

// 1. Mock useInView so the component is always "in view"
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    useInView: () => true, // always visible
    motion: {
      ...actual.motion,
      div: (props) => <div {...props} />,
      p: (props) => <p {...props} />,
    }
  }
})

function PortfolioPage() {
  return <h1>Portfolio Page</h1>
}

function AboutPage() {
  return <h1>Portfolio Page</h1>
}


describe('InfiniteScroll navigation', () => {
  it('navigates to the portfolio page when button is clicked', () => {
    renderWithRouter(
      {
        '/': (
              <>
                  <InfiniteScroll
                      icons={[]}
                      paragraph="Test paragraph"
                      button="about"
                      link="/about"
                  />
                  <InfiniteScroll
                      icons={[]}
                      paragraph="Test paragraph"
                      button="Portfolio"
                      link="/portfolio"
                  />
              </>
            ),
            '/portfolio': <PortfolioPage />,
            '/about': <AboutPage />
        },
      { route: '/' }
    )

    fireEvent.click(screen.getByRole('link', {name: '/portfolio/i'}))
    fireEvent.click(screen.getByRole('link', {name: '/about/i'}))

    expect(screen.getByText('Portfolio Page')).toBeInTheDocument()
    expect(screen.getByText('About me Page')).toBeInTheDocument()
  })
})
