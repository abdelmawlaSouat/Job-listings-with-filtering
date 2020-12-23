/**
 * JobCardFilters.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-23 11:55:35
 * Last modified  : 2020-12-23 18:36:37
 */

import PropTypes from 'prop-types'
import { Box, Button } from '@material-ui/core'

export default function JobCardFilters({ filters, classes }) {
	return (
		<Box display="flex" flexWrap="wrap">
			{filters.map((filter) => (
				<Box key={filter.idx} my={1}>
					<Button className={classes}>{filter.value}</Button>
				</Box>
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
