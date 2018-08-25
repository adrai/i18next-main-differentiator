import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './App.css';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media' className="App-logo" alt="logo" />
          <h2>{t('title', { tech: 'react', lib: 'react-i18next' })}</h2>
        </div>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <div className="App-intro">
          {t('description')}
        </div>
      </div>
    );
  }
}

export default translate('translations')(App);
