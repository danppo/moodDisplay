/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Link from './link'
import '@testing-library/jest-dom/extend-expect';

describe('Link', () => {
  it('renders a link', () => {
    render(<Link label="link text" />)

    const link = screen.getByTestId('link')

    expect(link).toHaveTextContent("link text")
    expect(link).not.toHaveTextContent("not this")
    // TODO test link path
  })
})