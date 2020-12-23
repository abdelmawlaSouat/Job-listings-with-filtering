/**
 * JobInfos.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-23 12:21:46
 * Last modified  : 2020-12-23 14:56:26
 */

import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import JobChips from './JobChips'

function JobInfos({ job, classes }) {
	const chipRoot = clsx(
		classes.whiteColor,
		classes.fontSize076,
		classes.fontWeight550
	)

	return (
		<Box display="flex">
			<img src={`./images/companies/${job.logo}`} alt="Logo Company" />
			<Box ml={2}>
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
				<Typography
					variant="h6"
					className={clsx(classes.darkColor, classes.fontWeight550)}
				>
					{job.position}
				</Typography>
				<Box display="flex" className={classes.greyColor}>
					<Typography className={classes.pr05}>{job.postedAt}</Typography>
					<Typography className={classes.pr05}>-</Typography>
					<Typography className={classes.pr05}>{job.contract}</Typography>
					<Typography className={classes.pr05}>-</Typography>
					<Typography className={classes.pr05}>{job.location}</Typography>
				</Box>
			</Box>
		</Box>
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
