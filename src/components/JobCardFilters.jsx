/**
 * JobCardFilters.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-23 11:55:35
 * Last modified  : 2020-12-23 12:55:37
 */

import PropTypes from 'prop-types'
import { Box, Button } from '@material-ui/core'

export default function JobCardFilters({ filters, classes }) {
	return (
		<Box display="flex" flexWrap="wrap" alignItems="center">
			{filters.map((filter) => (
				<Button key={filter.idx} className={classes}>
					{filter.value}
				</Button>
			))}
		</Box>
	)
}

JobCardFilters.defaultProps = {
	classes: '',
}

JobCardFilters.propTypes = {
	filters: PropTypes.instanceOf(Array).isRequired,
	classes: PropTypes.string,
}
