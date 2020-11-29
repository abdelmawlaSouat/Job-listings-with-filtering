/*
 * JobCard.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/28 16:06:28
 *
 * Copyright (c) 2020 Shuriken
 */

import {
	Box,
	Button,
	Card,
	Chip,
	makeStyles,
	Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
	// Position
	pa2_5: { padding: '2.5rem' },
	pr05: { paddingRight: '0.5rem' },
	ml1: { marginLeft: '1rem' },
	mr05: { marginRight: '0.5rem' },
	borderLeft: { borderLeft: '5px solid hsl(180, 29%, 50%)' },
	// Background
	cyanBg: { background: theme.palette.primary.main },
	darkBg: { background: theme.palette.primary.dark },
	whiteBg: { background: 'white' },
	lightCyan: { background: theme.palette.secondary.main },
	// Color
	greyColor: { color: theme.palette.text.secondary },
	darkColor: { color: theme.palette.primary.dark },
	whiteColor: { color: 'white' },
	// Font
	fontWeight550: { fontWeight: '550' },
	fontSize076: { fontSize: '0.75rem' },
	noTextTransform: { textTransform: 'none' },
	// boxShadow: { boxShadow: '0px 2px 2px 1px hsl(180, 52%, 96%)' },
}))

function JobCard({ job }) {
	const classes = useStyles()

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
		<Card
			className={clsx(
				classes.whiteBg,
				classes.pa2_5,
				classes.boxShadow,
				classes.borderLeft
			)}
		>
			<Box
				className="card-box"
				display="flex"
				justifyContent="space-between"
			>
				<Box display="flex">
					<img
						src={`./images/companies/${job.logo}`}
						alt="Logo Company"
					/>
					<Box className={classes.ml1}>
						<Box display="flex">
							<Typography
								variant="body2"
								className={clsx(classes.mr05, classes.fontWeight550)}
							>
								{job.company}
							</Typography>
							{job.new && (
								<Chip
									label="NEW!"
									className={clsx(
										classes.cyanBg,
										classes.whiteColor,
										classes.fontSize076,
										classes.mr05,
										classes.fontWeight550
									)}
									size="small"
								/>
							)}
							{job.featured && (
								<Chip
									label="FEATURED"
									className={clsx(
										classes.darkBg,
										classes.whiteColor,
										classes.fontSize076,
										classes.fontWeight550
									)}
									size="small"
								/>
							)}
						</Box>
						<Typography
							variant="h6"
							className={clsx(
								classes.darkColor,
								classes.fontWeight550
							)}
						>
							{job.position}
						</Typography>
						<Box display="flex" className={classes.greyColor}>
							<Typography className={classes.pr05}>
								{job.postedAt}
							</Typography>
							<Typography className={classes.pr05}>-</Typography>
							<Typography className={classes.pr05}>
								{job.contract}
							</Typography>
							<Typography className={classes.pr05}>-</Typography>
							<Typography className={classes.pr05}>
								{job.location}
							</Typography>
						</Box>
					</Box>
				</Box>

				<Box display="flex" flexWrap="wrap" alignItems="center">
					{filters.map((filter) => (
						<Button
							key={filter.idx}
							className={clsx(
								classes.fontWeight550,
								classes.lightCyan,
								classes.noTextTransform,
								classes.mr05
							)}
						>
							{filter.value}
						</Button>
					))}
				</Box>
			</Box>
		</Card>
	)
}

JobCard.protoTypes = {
	job: PropTypes.object.isRequired,
}

export default JobCard
