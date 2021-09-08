/**
 * @jest-environment jsdom
*/

import React from 'react'
import { render, screen } from '@testing-library/react'
import MiniInfoBox from './miniInfoBox'
import '@testing-library/jest-dom/extend-expect';

describe('MiniInfoBox', () => {
  it('renders a MiniInfoBox members', () => {
    render(<MiniInfoBox title="Members" data="12" />)

    const miniInfoBoxTitle = screen.getByTestId('miniInfoBoxTitle')
    const miniInfoBoxData = screen.getByTestId('miniInfoBoxData')

    expect(miniInfoBoxTitle).toHaveTextContent("Members")
    expect(miniInfoBoxData).toHaveTextContent("12")
  })
  it('renders a MiniInfoBox engagement', () => {
    render(<MiniInfoBox title="Engagement" data="12" />)

    const miniInfoBoxTitle = screen.getByTestId('miniInfoBoxTitle')
    const miniInfoBoxData = screen.getByTestId('miniInfoBoxData')

    expect(miniInfoBoxTitle).toHaveTextContent("Engagement")
    expect(miniInfoBoxData).toHaveTextContent("12%")
  })
});
