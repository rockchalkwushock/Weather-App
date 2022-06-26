import type { RestHandler } from 'msw'
import { rest } from 'msw'

export const handlers: Array<RestHandler> = [
	rest.post('/fetch-weather', (req, res, ctx) => {
		if (req.body) {
			return res(
				ctx.status(401),
				ctx.json({
					message: '',
					status: 1,
				})
			)
		}

		return res(ctx.status(200), ctx.json({}))
	}),
]
