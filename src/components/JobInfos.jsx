/**
 * JobInfos.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-23 12:21:46
 * Last modified  : 2020-12-23 19:08:00
 */

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@material-ui/core'
import JobChips from './JobChips'

const useStyles = makeStyles((theme) => ({
	logo: {
		[theme.breakpoints.only('xs')]: {
			width: '65px',
			height: '65px',
		},
	},
	positionJob: {
		fontSize: '1.25rem',
		[theme.breakpoints.only('xs')]: {
			fontSize: '1.2rem',
		},
	},
}))

function JobInfos({ job, classes }) {
	const localClasses = useStyles()
	const chipRoot = clsx(
		classes.whiteColor,
		classes.fontSize076,
		classes.fontWeight550
	)

	return (
		<Grid container spacing={1}>
			<Grid item md={2}>
				<img
					className={localClasses.logo}
					src={`./images/companies/${job.logo}`}
					alt="Logo Company"
				/>
			</Grid>

			<Grid item md={6}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Box display="flex">
							<Typography
								variant="body2"
								className={clsx(classes.mr05, classes.fontWeight550)}
							>
								{job.company}
							</Typography>

							<JobChips
								newJob={job.new}
								featured={job.featured}
								newJobClasses={clsx(chipRoot, classes.cyanBg, classes.mr05)}
								featuredClasses={clsx(chipRoot, classes.darkBg)}
								classes={classes}
							/>
						</Box>
					</Grid>

					<Grid item xs={12}>
						<Typography
							className={clsx(
								localClasses.positionJob,
								classes.darkColor,
								classes.fontWeight550
							)}
						>
							{job.position}
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Box display="flex" className={classes.greyColor}>
							<Typography className={classes.pr05}>{job.postedAt}</Typography>
							<Typography className={classes.pr05}>-</Typography>
							<Typography className={classes.pr05}>{job.contract}</Typography>
							<Typography className={classes.pr05}>-</Typography>
							<Typography className={classes.pr05}>{job.location}</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

JobInfos.propTypes = {
	job: PropTypes.shape({
		id: PropTypes.number,
		company: PropTypes.string,
		logo: PropTypes.string,
		new: PropTypes.bool,
		featured: PropTypes.bool,
		position: PropTypes.string,
		role: PropTypes.string,
		level: PropTypes.string,
		postedAt: PropTypes.string,
		contract: PropTypes.string,
		location: PropTypes.string,
		languages: PropTypes.arrayOf(PropTypes.string),
		tools: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
	classes: PropTypes.shape({
		whiteColor: PropTypes.string,
		fontSize076: PropTypes.string,
		fontWeight550: PropTypes.string,
		pr05: PropTypes.string,
		mr05: PropTypes.string,
		cyanBg: PropTypes.string,
		darkBg: PropTypes.string,
		darkColor: PropTypes.string,
		greyColor: PropTypes.string,
	}).isRequired,
}

export default JobInfos
