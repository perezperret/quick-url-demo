import React from 'react'
import clearInput from '../helpers/clearInput'

const ParsedUrlInput = ({ parsedUrl, onBuildUrl, onInputChange }) => (
  <form>
    <textarea value={parsedUrl} name='parsedUrl' onChange={onInputChange} placeholder="Enter a parsed URL" />
    <button type="button" onClick={onBuildUrl}>Build</button>
    <button type="button" onClick={clearInput(onInputChange, 'parsedUrl')}>Clear</button>
  </form>
)

export default ParsedUrlInput
