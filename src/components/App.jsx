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
					<Grid
						container
						className="job-listings"
						justify="center"
						spacing={5}
					>
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
