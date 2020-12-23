/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-11-25 23:55:05
 * Last modified  : 2020-12-23 17:19:19
 */

import {
	Box,
	Container,
	CssBaseline,
	Grid,
	ThemeProvider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import theme from '../themes/theme'
import jobs from '../data/jobs.json'
import JobCard from './JobCard'

const useStyles = makeStyles(() => ({
	header: {
		background: "url('./images/bg-header-desktop.svg')",
		height: '15vh',
		backgroundRepeat: 'no-repeat',
		[theme.breakpoints.only('xs')]: {
			background: "url('./images/bg-header-mobile.svg')",
		},
	},
}))

function App() {
	const classes = useStyles()
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Box mb={2} style={{ background: 'hsl(180, 29%, 50%)' }}>
					<Box className={classes.header} />
				</Box>
				<Container className="App">
					<Grid container className="Job-listings" justify="center" spacing={5}>
						{jobs.map((job) => (
							<Grid item key={job.id} xs={10}>
								<JobCard job={job} />
							</Grid>
						))}
					</Grid>
				</Container>
			</CssBaseline>
		</ThemeProvider>
	)
}

export default App
