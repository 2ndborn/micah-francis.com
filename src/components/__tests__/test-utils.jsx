import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

export function renderWithRouter(routeMap, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        {Object.entries(routeMap).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </MemoryRouter>
  )
}
