/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import MoodLevel from './moodLevel'
import '@testing-library/jest-dom/extend-expect';

describe('MoodLevel', () => {
  it('renders negative', () => {
    render(<MoodLevel precentage="12" squadMood="negative" />)

    const tag = screen.getByTestId('moodLevelTag')

    expect(tag).toHaveTextContent("This squad is not feeling great")
    expect(tag).not.toHaveTextContent("This squad is feeling low")
    expect(tag).not.toHaveTextContent("This squad is feeling great")
  })
  it('renders neutral', () => {
    render(<MoodLevel precentage="40" squadMood="neutral" />)

    const tag = screen.getByTestId('moodLevelTag')

    expect(tag).toHaveTextContent("This squad is feeling low")
    expect(tag).not.toHaveTextContent("This squad is not feeling great")
    expect(tag).not.toHaveTextContent("This squad is feeling great")
  })
  it('renders positive', () => {
    render(<MoodLevel precentage="92" squadMood="positive" />)

    const tag = screen.getByTestId('moodLevelTag')

    expect(tag).toHaveTextContent("This squad is feeling great")
    expect(tag).not.toHaveTextContent("This squad is not feeling great")
    expect(tag).not.toHaveTextContent("This squad is feeling low")
  })
})