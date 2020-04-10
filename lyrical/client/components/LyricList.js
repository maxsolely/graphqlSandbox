import React, { Component } from 'react'

class LyricList extends Component {

  onLike(id) {
    console.log(id)
  }

  renderLyrics() {
    console.log('im getting called')
    return this.props.lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <i
            className="material-icons"
            onClick={() => this.onLike(lyric.id)}
          >
            thumb_up
          </i>
        </li>
      )
    })
  }

  render() {
    console.log(this.props.lyrics)
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    )
  }
}

export default LyricList