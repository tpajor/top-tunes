import * as React from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';

import { urls } from '../../../Routing/urls';
import IITune from '../../../Shared/Interfaces/models/IITune';
import TuneDetailTextItem from './TuneDetailTextItem';

interface IState {
  isClosing: boolean;
}

export interface IProps {
  history: History;
  tune: IITune;
}

class TuneDetailModal extends React.PureComponent<IProps, IState> {
  state: IState = {
    isClosing: false,
  };

  componentDidMount() {
    if (!this.props.tune) {
      const { push } = (this.props.history);
      push(urls.reactRouter.topTunes);
    }
  }

  handleClosingAnimation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    this.setState({ isClosing: true });

    const { push } = (this.props.history);
    setTimeout(() => push(urls.reactRouter.topTunes), 500);
  }

  formatDate = () => {
    return (
      `${this.props.tune.releaseDate.getUTCFullYear()}-${
        this.props.tune.releaseDate.getUTCMonth() < 10 ? `0${this.props.tune.releaseDate.getUTCMonth()}-` : `${
          this.props.tune.releaseDate.getUTCMonth()}-`}${this.props.tune.releaseDate.getUTCDate() < 10 ? `0${
            this.props.tune.releaseDate.getUTCDate()}` : `${this.props.tune.releaseDate.getUTCDate()}`}`
    );
  }

  formatRights = () => {
    return (
      this.props.tune.rights.length > 75 ? `${this.props.tune.rights.substring(0, 75)}...` : this.props.tune.rights
    );
  }

  render() {
    return (
      <div className={`container container--modal-background ${this.state.isClosing ? 'slide-out' : 'slide-in'}`}>
        <div className='container container--modal-main'>
          <Link
            className='link link--close'
            to={urls.reactRouter.topTunes}
            onClick={this.handleClosingAnimation}
          >
            X
          </Link>

          <header className='container container--modal-header'>
            <div className='link link--back' onClick={this.handleClosingAnimation} />
            <h1 className='text text--title'>
              {`${this.props.tune.artist} - `}
              <span className='text text--title-secondary'>{this.props.tune.name}</span>
            </h1>
            <div className='container container--modal-header-overlay' onClick={this.handleClosingAnimation} />
          </header>

          <section className='container container--modal-section'>
            <div className='container container--modal-item'>
              <img className='image image--cover' src={this.props.tune.photo} alt='cover' />
            </div>

            <div className='container container--modal-item'>
              <h2 className='text text--modal-item-title'>
                Visit profile
              </h2>

              <a
                href={this.props.tune.link}
                target='_blank'
                rel='noopener noreferrer'
                className='link link--visitiTunes'
              >
                <p className='text text--modal-item-text'>
                  iTune
                </p>
                <div className='container container--go-to-icon' />
              </a>
            </div>

            <TuneDetailTextItem title='Category' text={this.props.tune.category} />

            <TuneDetailTextItem title='Number of tracks' text={this.props.tune.numberOfSongs} />

            <TuneDetailTextItem title='Released' text={this.formatDate()} />

            <TuneDetailTextItem title='Price' text={this.props.tune.price} />

            <TuneDetailTextItem title='Producer' text={this.formatRights()} />
          </section>
        </div>
      </div>
    );
  }
}

export default TuneDetailModal;
