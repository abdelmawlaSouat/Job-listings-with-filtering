/*
 * App.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/25 23:55:05
 *
 * Copyright (c) 2020 Shuriken
 */

import {
	Container,
	CssBaseline,
	Grid,
	ThemeProvider,
} from '@material-ui/core'
import theme from '../themes/theme'
import jobs from '../data/jobs.json'
import JobCard from './JobCard'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Container className="app">
					<h1>Job Listings</h1>
					<Grid container className="job-listings">
						{jobs.map((job) => (
							<Grid item key={job.id}>
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
