/**
 * ActivedFilters.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-23 17:26:47
 * Last modified  : 2020-12-23 21:51:31
 */

import {
	Card,
	Box,
	Grid,
	Typography,
	Button,
	makeStyles,
} from '@material-ui/core'
import clsx from 'clsx'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles((theme) => ({
	card: {
		background: 'white',
		borderLeft: '5px solid hsl(180, 29%, 50%)',
		marginBottom: '2rem',
		padding: '1.5rem',
		[theme.breakpoints.only('xs')]: {
			padding: '1rem',
		},
	},
	filter: {
		fontWeight: '550',
		background: theme.palette.secondary.main,
		padding: '0.1rem 1rem 0.1rem 1rem',
	},
	crossBtn: {
		background: 'hsl(180, 29%, 50%)',
		padding: '0',
		minWidth: '0',
		marginRight: '1rem',
		'&:hover': {
			background: 'hsl(180, 14%, 20%)',
		},
	},
	noTextTransform: { textTransform: 'none' },
}))

function ActivedFilters({ activedFilters, clearFilter, removeFilter }) {
	const classes = useStyles()

	return (
		<Card className={clsx(classes.card)}>
			<Grid container justify="space-between">
				<Grid item xs={10}>
					<Box display="flex" flexWrap="wrap">
						{activedFilters.map((filter) => (
							<Box display="flex" key={filter.idx} my={1}>
								<Typography className={clsx(classes.filter)}>
									{filter.value}
								</Typography>
								<Button
									className={classes.crossBtn}
									onClick={() => removeFilter(filter)}
								>
									<ClearIcon style={{ color: 'white' }} />
								</Button>
							</Box>
						))}
					</Box>
				</Grid>
				<Grid item>
					<Button
						className={clsx(classes.filter, classes.noTextTransform)}
						onClick={clearFilter}
					>
						Clear
					</Button>
				</Grid>
			</Grid>
		</Card>
	)
}

export default ActivedFilters
