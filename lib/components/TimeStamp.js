import storeProvider from './storeProvider';

const timeDisplay = (timestamp) =>
  timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const TimeStamp = ({ timestampDisplay }) => (
  <div>{timestampDisplay}</div>
);

function extraProps(store) {
  return {
    timestampDisplay: timeDisplay(store.getState().timestamp),
  };
}

export default storeProvider(extraProps)(TimeStamp);
