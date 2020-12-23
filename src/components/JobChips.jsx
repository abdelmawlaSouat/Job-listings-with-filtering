/**
 * JobChips.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-23 13:09:55
 * Last modified  : 2020-12-23 14:36:39
 */

import { Box, Chip } from '@material-ui/core'
import PropTypes from 'prop-types'

function JobChips({ newJob, featured, newJobClasses, featuredClasses }) {
	return (
		<Box>
			{newJob && <Chip label="NEW!" className={newJobClasses} size="small" />}

			{featured && (
				<Chip label="FEATURED" className={featuredClasses} size="small" />
			)}
		</Box>
	)
}

JobChips.defaultProps = {
	newJobClasses: '',
	featuredClasses: '',
}

JobChips.propTypes = {
	newJob: PropTypes.bool.isRequired,
	featured: PropTypes.bool.isRequired,
	featuredClasses: PropTypes.string,
	newJobClasses: PropTypes.string,
}

export default JobChips
