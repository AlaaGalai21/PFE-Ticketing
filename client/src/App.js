import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const theme = createMuiTheme({
	
});

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MuiThemeProvider theme={theme}>
					<Routes />
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default App;
