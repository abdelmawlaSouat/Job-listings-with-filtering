/**
 * JobCard.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-11-28 16:06:28
 * Last modified  : 2020-12-23 19:08:47
 */

import { Grid, Card, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import JobInfos from './JobInfos'
import JobCardFilters from './JobCardFilters'

const useStyles = makeStyles((theme) => ({
	pa2_5: {
		padding: '2.5rem',
		[theme.breakpoints.only('xs')]: {
			padding: '1rem',
		},
	},
	pr05: { paddingRight: '0.5rem' },
	ml1: { marginLeft: '1rem' },
	mr05: { marginRight: '0.5rem' },
	borderLeft: { borderLeft: '5px solid hsl(180, 29%, 50%)' },
	cyanBg: { background: theme.palette.primary.main },
	darkBg: { background: theme.palette.primary.dark },
	whiteBg: { background: 'white' },
	lightCyan: { background: theme.palette.secondary.main },
	greyColor: { color: theme.palette.text.secondary },
	darkColor: { color: theme.palette.primary.dark },
	whiteColor: { color: 'white' },
	fontWeight550: { fontWeight: '550' },
	fontSize076: { fontSize: '0.75rem' },
	noTextTransform: { textTransform: 'none' },
	// boxShadow: { boxShadow: '0px 2px 2px 1px hsl(180, 52%, 96%)' },
}))

function JobCard({ job }) {
	const classes = useStyles()

	const filters = [job.role, job.level, ...job.languages, ...job.tools].map(
		(filter, idx) => ({
			idx: Date.now() + idx,
			value: filter,
		})
	)

	return (
		<Card
			className={clsx(
				classes.whiteBg,
				classes.pa2_5,
				classes.boxShadow,
				classes.borderLeft
			)}
		>
			<Grid container className="Job-card" justify="space-between" spacing={2}>
				<Grid item xs={12} md={6}>
					<JobInfos job={job} classes={classes} />
				</Grid>
				<Grid item xs={12} md={4}>
					<JobCardFilters
						filters={filters}
						classes={clsx(
							classes.fontWeight550,
							classes.lightCyan,
							classes.noTextTransform,
							classes.mr05
						)}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}

JobCard.propTypes = {
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
}

export default JobCard
