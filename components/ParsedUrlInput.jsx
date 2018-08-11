import React from 'react'
import clearInput from '../helpers/clearInput'

const ParsedUrlInput = ({ parsedUrl, onBuildUrl, onInputChange }) => (
  <div className="section">
    <h2 className="section_title">Parsed URL</h2>

    <form className="form">
      <textarea
        className="form_textarea"
        name='parsedUrl' placeholder="Enter a parsed URL"
        value={parsedUrl} onChange={onInputChange} />

      <div className="form_buttons">
        <button type="button" onClick={onBuildUrl}>Build</button>
        <button type="button" onClick={clearInput(onInputChange, 'parsedUrl')}>Clear</button>
      </div>
    </form>
  </div>
)

export default ParsedUrlInput
