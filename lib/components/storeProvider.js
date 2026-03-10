import React from 'react';
import StoreContext from './StoreContext';

const storeProvider = (extraProps = () => ({})) => (Component) => {

	return class extends React.PureComponent {
		static displayName = `${Component.name}Container`;
		static contextType = StoreContext;
		
		usedState = () => {
			return extraProps(this.context, this.props);
		}

		state = this.usedState();

		onStoreChange = () => {
			if (this.subscriptionId) {
				this.setState(this.usedState());				
			}
		}

		componentDidMount() {
			this.subscriptionId = this.context.subscribe(this.onStoreChange);
		
		}

		componentWillUnmount() {
			this.context.unsubscribe(this.subscriptionId);
			this.subscriptionId = null;
		}

		render() {
			return <Component 
			{...this.props}
			{...this.usedState()}
			store={this.context} 
		/>;
		}
	}
};

export default storeProvider;
