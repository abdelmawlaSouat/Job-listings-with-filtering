/**
 * theme.js
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-11-27 15:37:33
 * Last modified  : 2020-12-23 15:06:40
 */

import { createMuiTheme } from '@material-ui/core/styles'
import Spartan from '../fonts/Spartan-Regular.ttf'

const spartan = {
	fontFamily: 'Spartan',
	fontStyle: 'normal',
	src: `
		local('Spartan'),
		url(${Spartan})
	`,
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'hsl(180, 29%, 50%)',
			dark: 'hsl(180, 14%, 20%)',
		},
		secondary: {
			main: 'hsl(180, 31%, 95%)',
		},
		background: {
			default: 'hsl(180, 52%, 96%)',
			paper: 'hsl(180, 31%, 95%)',
		},
		text: {
			primary: 'hsl(180, 29%, 50%)',
		},
	},
	typography: {
		fontFamily: 'Spartan Arial',
		fontSize: 15,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [spartan],
			},
		},
	},
})

export default theme
