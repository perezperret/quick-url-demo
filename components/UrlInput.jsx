import React from 'react'
import clearInput from '../helpers/clearInput'

const UrlInput = ({ onInputChange, onParseUrl, url }) => (
  <form>
    <input type="text" name="url" onChange={onInputChange} value={url} placeholder="Enter a URL" />
    <button type="button" onClick={onParseUrl}>Parse</button>
    <button type="button" onClick={clearInput(onInputChange, 'url')}>
      Clear
    </button>
  </form>
)

export default UrlInput
