import * as React from 'react';

interface AppState {
  dateString: string;
  even: boolean;
}

class App extends React.Component<{}, AppState> {
  private formatDateString = (date: Date): string => {
    const [time] = date.toTimeString().split(' ');
    return `${time}.${date.getMilliseconds()}`;
  }

  private updateTime = (): void => {
    this.setState({ dateString: this.formatDateString(new Date()) });
  }

  private updateClass = (): void => {
    this.setState(({ even }) => ({ even: !even }));
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      dateString: this.formatDateString(new Date()),
      even: true,
    };
    setInterval(this.updateTime, 10);
    setInterval(this.updateClass, 1000);
  }

  renderMarquee = (message: string, scrollAmount: number, direction: 'left' | 'right'): JSX.Element => {
    return (
      // @ts-ignore
      <marquee scrollamount={ scrollAmount } direction={ direction }>{ message }</marquee>
    );
  }

  renderMailToLink = (): JSX.Element => {
    return (
      <a className="mailto" href="mailto:alex.frieder@gmail.com">
        Impressed by what you see? Contact me.
      </a>
    );
  }

  render(): JSX.Element {
    const className = this.state.even ? 'even' : 'odd';
    const message = `The current time is ${ this.state.dateString }`;
    return (
      <div className={ className }>
        { this.renderMarquee(message, 19, 'left') }
        { this.renderMarquee(message, 24, 'right') }
        { this.renderMarquee(message, 15, 'left') }
        { this.renderMarquee(message, 26, 'right') }
        { this.renderMarquee(message, 21, 'left') }
        { this.renderMailToLink() }
      </div>
    );
  }
};

export { App };
