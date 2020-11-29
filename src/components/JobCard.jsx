/*
 * JobCard.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/28 16:06:28
 *
 * Copyright (c) 2020 Shuriken
 */

import { Button, Card, Chip, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

function JobCard({ job }) {
	const filters = [
		job.role,
		job.level,
		...job.languages,
		...job.tools,
	].map((filter) => ({
		idx: Math.floor(Math.random() * 1000),
		value: filter,
	}))

	return (
		<Card>
			<Grid container>
				<Grid item>
					<img
						src={`./images/companies/${job.logo}`}
						alt="Logo Company"
					/>
				</Grid>
				<Grid item>
					<div>
						<span>{job.company}</span>
						<Chip label="NEW!" />
						<Chip label="FEATURED" />
					</div>
					<span>{job.position}</span>
					<div>
						<span>{job.postedAt}</span>
						<span>{job.contract}</span>
						<span>{job.location}</span>
					</div>
				</Grid>
				<Grid item>
					{filters.map((filter) => (
						<Button key={filter.idx}>{filter.value}</Button>
					))}
				</Grid>
			</Grid>
		</Card>
	)
}

JobCard.protoTypes = {
	job: PropTypes.object.isRequired,
}

export default JobCard
