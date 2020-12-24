/**
 * Footer.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-10 09:59:13
 * Last modified  : 2020-12-24 10:50:26
 */

import { Box } from '@material-ui/core'
import Sources from './Sources'

function Footer() {
	return (
		<Box display="flex" justifyContent="center" mt={6} mb={3}>
			<Sources
				author="Abdelmawla Souat"
				authorProfileLink="https://www.linkedin.com/in/abdelmawla-souat/"
				challengeLink="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
			/>
		</Box>
	)
}

export default Footer
