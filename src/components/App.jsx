/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-11-25 23:55:05
 * Last modified  : 2020-12-24 10:47:08
 */

import { useState } from 'react'
import { Box, CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import theme from '../themes/theme'
import jobs from '../data/jobs.json'
import ActivedFilters from './ActivedFilters'
import JobCard from './JobCard'
import Footer from './Footer'

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
	const [activedFilters, setActivedFilters] = useState([])
	const classes = useStyles()

	function addFilter(filter) {
		if (!activedFilters.some((item) => item.value === filter.value)) {
			setActivedFilters([...activedFilters, filter])
		}
	}

	function removeFilter(filter) {
		setActivedFilters(
			activedFilters.filter((item) => item.value !== filter.value)
		)
	}

	function clearFilter() {
		setActivedFilters([])
	}

	function filterJob(job) {
		const filters = [job.role, job.level, ...job.languages, ...job.tools]

		if (
			activedFilters.length === 0 ||
			activedFilters.some((item) => filters.includes(item.value))
		) {
			return (
				<Grid item key={job.id} xs={12}>
					<JobCard job={job} addFilter={addFilter} />
				</Grid>
			)
		}
		return null
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Box mb={2} style={{ background: 'hsl(180, 29%, 50%)' }}>
					<Box className={classes.header} mb={5} />
				</Box>
				<Grid container className="App" justify="center">
					{activedFilters.length > 0 && (
						<Grid item xs={10}>
							<ActivedFilters
								activedFilters={activedFilters}
								clearFilter={clearFilter}
								removeFilter={removeFilter}
							/>
						</Grid>
					)}
					<Grid item xs={10}>
						<Grid
							container
							className="Job-listings"
							justify="center"
							spacing={5}
						>
							{jobs.map((job) => filterJob(job))}
						</Grid>
					</Grid>
					<Grid item>
						<Footer />
					</Grid>
				</Grid>
			</CssBaseline>
		</ThemeProvider>
	)
}

export default App
