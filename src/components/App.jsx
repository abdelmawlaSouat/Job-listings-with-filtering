/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-11-25 23:55:05
 * Last modified  : 2020-12-23 17:59:23
 */

// import { useState } from 'react'
import {
	Box,
	// Container,
	CssBaseline,
	Grid,
	ThemeProvider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import theme from '../themes/theme'
import jobs from '../data/jobs.json'
import ActivedFilters from './ActivedFilters'
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
	// const [activedFilters, setActivedFilters] = useState()
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Box mb={2} style={{ background: 'hsl(180, 29%, 50%)' }}>
					<Box className={classes.header} />
				</Box>
				<Grid container className="App" justify="center">
					<Grid item xs={10}>
						<ActivedFilters />
					</Grid>
					<Grid item xs={10}>
						<Grid
							container
							className="Job-listings"
							justify="center"
							spacing={5}
						>
							{jobs.map((job) => (
								<Grid item key={job.id} xs={12}>
									<JobCard job={job} />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</CssBaseline>
		</ThemeProvider>
	)
}

export default App
