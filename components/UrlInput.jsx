import React from 'react'
import clearInput from '../helpers/clearInput'

const UrlInput = ({ onInputChange, onParseUrl, url }) => (
  <div className="section">
    <h2 className="section_title">URL</h2>

    <form className="form">
      <textarea
        className="form_textarea"
        name="url" placeholder="Enter a URL"
        value={url} onChange={onInputChange} />

      <div className="form_buttons">
        <button type="button" onClick={onParseUrl}>Parse</button>
        <button type="button" onClick={clearInput(onInputChange, 'url')}>Clear</button>
      </div>
    </form>
  </div>
)

export default UrlInput
