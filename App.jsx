import React from 'react'
import qUrl from 'quick-url'

import Header from './components/Header'
import UrlInput from './components/UrlInput'
import ParsedUrlInput from './components/ParsedUrlInput'

const DEFAULT_URL = [
    'http://example.com/users/a-123/accounts?',
    'filter[created][after]=2017-8-6&filter[created][before]=2019-7-5',
    '&type=savings,checking'
  ].join('');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: DEFAULT_URL,
      parsedUrl: ''
    }

    this.parseUrl = this.parseUrl.bind(this)
    this.buildUrl = this.buildUrl.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange({ target }) {
    this.setState({ [target.name]: target.value })
  }

  parseUrl() {
    const parsedUrl = JSON.stringify(qUrl.parseUrl(this.state.url))
    this.setState({ parsedUrl })
  }

  buildUrl() {
    const { resourcePath, queryParams } = JSON.parse(this.state.parsedUrl)
    const url = qUrl.buildUrl(resourcePath, queryParams)
    this.setState({ url })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <UrlInput
            url={this.state.url}
            onParseUrl={this.parseUrl}
            onInputChange={this.onInputChange}
          />
          <ParsedUrlInput
            parsedUrl={this.state.parsedUrl}
            onBuildUrl={this.buildUrl}
            onInputChange={this.onInputChange}
          />
        </div>
      </div>
    )
  }
}

export default App
